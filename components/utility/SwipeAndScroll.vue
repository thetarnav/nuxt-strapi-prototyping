<template>
	<div
		class="swipe-and-scroll outer-wrapper"
		:class="directions"
		@touchstart="touchStart"
		@touchmove="debouncedHandleTouchMove"
		@touchend="touchend"
		@wheel="wheel"
	>
		<div class="inner-wrapper">
			<slot></slot>
		</div>
		<div
			v-if="directions.includes('down')"
			class="swipe-space swipe-space--top"
		>
			<h6 class="m-auto">
				{{ $t(`pages.${prevRoute}`) }}
			</h6>
		</div>
		<GlobalEvents @scroll="debouncedHandleScroll"></GlobalEvents>

		<!-- <div class="log">
			{{ isAllowedDown }}
		</div> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import debounce from 'lodash.debounce'
import { searchForSuitableParent } from '~/assets/js/helpers'
import { SwipeDirection, PageTitles, PageOrder } from '~/types/types'

let lastTouchMove = {
	x: 0,
	y: 0,
	timestamp: 0,
}

export default Vue.extend({
	name: 'SwipeAndScroll',
	props: {
		directions: {
			type: Array,
			default: () => ['up', 'down', 'left', 'right'],
		},
	},
	data() {
		return {
			// Boolean-conditions for the VERTICAL scroll to happen. So that the swiping will not happen immediately when scrolled down too quickly.
			isAllowedDown: false,
			isAllowedUp: false,
			// a Placeholder for lodash debounced scroll handler.
			debouncedHandleScroll: () => {},
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			debouncedHandleTouchMove: (e: TouchEvent) => {},
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			debouncedTriggerSwipe: (direction: SwipeDirection) => {},
			debAllowUp: () => {},
			debAllowDown: () => {},
		}
	},
	computed: {
		parent() {
			return searchForSuitableParent(this.$el as HTMLElement, {
				overflowY: ['scroll', 'auto'],
			})
		},
		prevRouteTitle(): string {
			const { prevRoute } = this.$route.query
			let title = 'Home'
			if (typeof prevRoute === 'string' && PageTitles[prevRoute])
				title = PageTitles[prevRoute]
			return title
		},
		prevRoute(): string {
			const { prevRoute } = this.$route.query
			if (typeof prevRoute === 'string' && PageOrder[prevRoute])
				return prevRoute
			return 'index'
		},
		verticalPadding() {
			return this.$store.state.swipeVerticalPadding
		},
	},
	mounted() {
		this.debouncedHandleScroll = debounce(this.handleScrollingEnd, 100)
		this.debouncedHandleTouchMove = debounce(this.touchmove, 50, {
			maxWait: 50,
		})
		this.debouncedTriggerSwipe = debounce(this.triggerSwipe, 500, {
			leading: true,
			trailing: false,
		})
		this.debAllowUp = debounce(this.allowUp, 80, { maxWait: 80 })
		this.debAllowDown = debounce(this.allowDown, 200, { maxWait: 200 })
		;(this.parent ?? window).addEventListener(
			'scroll',
			this.debouncedHandleScroll,
		)
	},
	beforeDestroy() {
		;(this.parent ?? window).removeEventListener(
			'scroll',
			this.debouncedHandleScroll,
		)
	},
	methods: {
		getFromTop(): number {
			const { parent } = this,
				fromTop = (parent?.scrollTop as number) ?? window.scrollY

			return fromTop
		},
		getFromBottom(): number {
			const scrollHeight = this.getScrollHeight(),
				fromTop = this.getFromTop(),
				frameHeight = this.getFrameHeight()

			return scrollHeight - fromTop - frameHeight
		},
		getScrollHeight(): number {
			const { parent, $el } = this

			return parent?.scrollHeight ?? $el.clientHeight
		},
		getFrameHeight(): number {
			const { parent } = this

			return parent?.clientHeight ?? window.innerHeight
		},
		triggerSwipe(direction: SwipeDirection) {
			// Function that Ends an user swipe interaction.
			this.$emit('swipe', direction)
		},
		handleScrollingEnd() {
			/*
			It is a DEBOUNCED scroll handler.
			Used to scroll away from swipe padding OR trigger the Swipe.
			*/
			this.checkVerticalSwipe()
			this.isAllowedDown = false
			this.isAllowedUp = false
		},
		touchStart(e: TouchEvent) {
			/**
			 * Touch Start Event Handler
			 * Used to set the swipe starting point
			 * and allow vertical swipe for the current 'user swipe'
			 */
			this.isAllowedDown = true
			const { timeStamp: timestamp, touches } = e,
				{ clientX: x, clientY: y } = touches[0] || [0, 0]

			lastTouchMove = {
				x,
				y,
				timestamp,
			}

			this.allowUp()
		},
		allowUp() {
			if (this.getFromBottom() < 5) this.isAllowedUp = true
		},
		allowDown() {
			this.isAllowedDown = true
		},
		touchmove(e: TouchEvent) {
			/**
			 * Triggers Swipe Check
			 */

			const { debouncedTriggerSwipe: triggerSwipe } = this,
				{ timeStamp: timestamp } = e,
				{ clientX: x, clientY: y } = e.touches[0] || [0, 0],
				xVel =
					(x - lastTouchMove.x) / (timestamp - lastTouchMove.timestamp),
				yVel = (y - lastTouchMove.y) / (timestamp - lastTouchMove.timestamp)

			lastTouchMove = {
				x,
				y,
				timestamp,
			}

			// Is it fast?
			if (Math.abs(xVel) > 1 || Math.abs(yVel) > 1) {
				// Is it HORIZONTAL:
				if (Math.abs(xVel) / Math.abs(yVel) >= 2) {
					// Left or Right?
					if (xVel < 0) triggerSwipe('left')
					else triggerSwipe('right')
				}
				// Then it is VERTICAL
				else if (
					this.isAllowedUp &&
					yVel < -2 &&
					Math.abs(yVel) / Math.abs(xVel) >= 2
				)
					triggerSwipe('up')
			}
		},
		touchend() {
			setTimeout(() => {
				this.isAllowedDown = false
				this.isAllowedUp = false
			}, 100)
		},
		wheel({ deltaY }: WheelEvent) {
			const fromBottom = this.getFromBottom(),
				fromTop = this.getFromTop(),
				{ isAllowedUp, isAllowedDown, verticalPadding } = this

			// Allowing Swipe UP
			// and swiping if constantly scrolling down
			if (fromBottom <= 20 && deltaY > 0) {
				if (!isAllowedUp) this.debAllowUp()
				else this.triggerSwipe('up')
			} else this.isAllowedUp = false

			// Allowing Swipe DOWN
			if (fromTop <= verticalPadding + 10 && deltaY < 0) {
				if (!isAllowedDown) this.debAllowDown()
			} else this.isAllowedDown = false
		},
		checkVerticalSwipe() {
			const { directions, isAllowedDown, parent, verticalPadding } = this,
				fromTop = this.getFromTop()

			if (isAllowedDown && directions.includes('down') && fromTop < 5)
				this.debouncedTriggerSwipe('down')
			else {
				let scrollToY = -1
				if (directions.includes('down') && fromTop < verticalPadding)
					scrollToY = verticalPadding

				if (scrollToY !== -1)
					(parent ?? window).scrollTo({
						top: scrollToY,
						behavior: 'smooth',
					})
			}
		},
	},
})
</script>

<style lang="scss" scoped>
$vertical-swipe-space: 100px;
.outer-wrapper {
	position: relative;
	// background-color: $secondary;
	&.down {
		padding-top: $vertical-swipe-space;
	}
	// &.up {
	// 	padding-bottom: $vertical-swipe-space;
	// }
}
.swipe-space {
	position: absolute;
	left: 0;
	right: 0;
	height: $vertical-swipe-space;
	display: flex;

	&--top {
		top: 0;
		background: linear-gradient(
			theme('colors.gray.300'),
			theme('colors.gray.100')
		);
	}
	&--bottom {
		bottom: 0;
		background: linear-gradient(transparent, $gray7);
	}
}

.log {
	pointer-events: none;
	position: fixed;
	bottom: 50%;
	color: $orange;
	font-size: 1.5rem;
	left: 10px;
	background-color: $white;
}
</style>

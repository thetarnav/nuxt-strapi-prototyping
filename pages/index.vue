<template>
	<div class="page">
		<LangSwitch />
		<figure class="banner"></figure>
		<h1 class="title mt-52 text-center font-serif-display">
			<span class="text-lg">
				{{ $t('home.project') | Bluu }}
			</span>
			Renkidzieło
		</h1>
		<span class="text-6xl text-center mt-4">
			<Icon icon="image"></Icon>
		</span>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<h6 class="mt-8 whitespace-pre-line" v-html="$t('home.about')"></h6>
		<Button
			class="mt-4 self-center primary"
			:route="{ name: 'gallery', query: { filter: 'available' } }"
			leading-icon="shopping-bag-full"
		>
			{{ $t('home.cta') }}
		</Button>
		<div class="mt-20">
			<nuxt-link :to="localePath('/gallery/6021bd9be541ac0015845c94')">
				<img
					src="img/lampofon.webp"
					:alt="$t('home.heroImgAlt')"
					width="1000"
					height="1250"
					class="promo-photo cover-img"
				/>
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts">
import MainPageMixin from '~/plugins/mainPageMixin'

export default MainPageMixin.extend({
	name: 'Home',
	head() {
		return {
			title: 'Renkidzieło',
		}
	},
})
</script>

<style lang="scss" scoped>
.banner {
	@apply absolute inset-x-0 top-0 h-80 -z-1;
	background-image: url('../static/img/picek.jpg');
	background-size: cover;
	background-position-x: center;

	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 80%;
		background: linear-gradient(transparent, theme('colors.white'));
	}
}

/* // .project-name {
// 	margin-top: 24rem;

// 	color: $black;
// 	text-align: center;
// }
// .promo-photo {
// 	width: 100%;
// 	height: calc(100vw / 4 * 5 - var(--space-size) * 6 * 2);
// } */
</style>

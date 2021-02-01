export type SwipeDirection = 'up' | 'down' | 'left' | 'right'

export type RouteName =
	| 'index'
	| 'lamps'
	| 'belt-bags'
	| 'paintings'
	| 'gallery'

export type RoutePath =
	| '/'
	| '/lamps'
	| '/belt-bags'
	| '/paintings'
	| '/gallery'

// export const productTags = [
// 	'lamp',
// 	'belt-bag',
// 	'painting',
// 	'other',
// 	'available',
// 	'new',
// ] as const

// export type ProductTag = typeof productTags[number]

export class Page {
	name
	path
	title
	icon
	constructor(name: RouteName, path: RoutePath, title: string, icon: string) {
		this.name = name
		this.path = path
		this.title = title
		this.icon = icon
	}
}

export const pages = [
	new Page('index', '/', 'Home', 'home'),
	new Page('lamps', '/lamps', 'Lampy', 'lightbulb'),
	new Page('belt-bags', '/belt-bags', 'Saszetki', 'shopping-bag'),
	new Page('paintings', '/paintings', 'Obrazy', 'image'),
	new Page('gallery', '/gallery', 'Galeria', 'grip-vertical'),
]

export type ProductTag = string | 'available' | 'new'

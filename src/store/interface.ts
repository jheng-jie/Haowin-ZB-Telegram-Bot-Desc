export interface Name {
	bot: string,
	self: string
}

export interface Avatar {
	bot: string
	self: string
}

export interface Merchant {
	readonly lovezb: any
	readonly saomaozb: any
	readonly skyzhibo: any
}

export interface MenuItem {
	readonly name: string
	readonly path: string
	readonly desc: string
	active: boolean
}

export interface PlayStatus {
	play: boolean
	pause: boolean
	timeScale: number
}
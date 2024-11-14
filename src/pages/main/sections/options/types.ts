import type { ImageMetadata } from 'astro'

export interface OptionsCard {
	title: string
	description: string
	detailedDescription: string
	smImgSrc: ImageMetadata['src']
	lgImgSrc?: ImageMetadata['src']
	mdImgSrc?: ImageMetadata['src']
}

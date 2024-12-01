import type { ImageMetadata } from 'astro'

export interface OptionsCard {
	title: string
	description: string
	detailedDescription: string
	smImgSrc: ImageMetadata
	lgImgSrc: ImageMetadata
	mdImgSrc: ImageMetadata
}

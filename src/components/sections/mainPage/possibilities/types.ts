import type { ImageMetadata } from 'astro'

export interface CardItem {
	smImgSrc: ImageMetadata
	lgImgSrc: ImageMetadata
	subtitle: string
}

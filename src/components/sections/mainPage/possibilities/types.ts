import type { ImageMetadata } from 'astro'

export interface CardItem {
	smImgSrc: ImageMetadata['src']
	lgImgSrc: ImageMetadata['src']
	subtitle: string
}

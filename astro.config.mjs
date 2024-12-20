import { defineConfig } from 'astro/config'
import sitemap from 'astro-sitemap'

const HOST = 4321
const LIVE_URL = 'https://altair-tara.ru'
const LOCALHOST_URL = `http://localhost:${HOST}/`
const SCRIPT = process.env.npm_lifecycle_script ?? ''
const isBuild = SCRIPT.includes('astro build')
let BASE_URL = LOCALHOST_URL

if (isBuild) {
	BASE_URL = LIVE_URL
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		sitemap(),
		(await import('astro-compress')).default(),
	],
	site: BASE_URL,
})

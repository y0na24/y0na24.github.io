import { defineConfig } from 'astro/config'
import sitemap from 'astro-sitemap'
import robotTxt from 'astro-robots-txt'

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
		robotTxt(),
		(await import('astro-compress')).default(),
	],
	site: BASE_URL,
})

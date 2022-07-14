import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import fs from 'node:fs';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		appDir: `sveltekit-wphp/_app`,
		paths: {
			base: dev ? '' : `/sveltekit-wphp`
		},
		prerender: {
			default: true
		}
	}
};

export default config;
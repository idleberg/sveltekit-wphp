import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import fs from 'node:fs';

const pkg = fs.readFileSync('./package.json', 'utf8');
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
		appDir: `${pkg.name}/_app`,
		paths: {
			base: dev ? '' : `/${pkg.name}`
		},
		prerender: {
			default: true
		}
	}
};

export default config;

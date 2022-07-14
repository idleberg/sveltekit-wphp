import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';

const defaultRoute = '/wp-admin';

/** @type {import('vite').UserConfig} */
const config = {
	base: '/sveltekit-wphp',
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: resolve('./src/components')
		}
	},
	server: {
		open: defaultRoute
	},
	preview: {
		open: defaultRoute
	}
};

export default config;

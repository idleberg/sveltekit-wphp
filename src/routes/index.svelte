<!-- This route is meant for the demo page only -->
<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Hello world! &lsaquo; {import.meta.env.VITE_SITE_NAME} — WordPress</title>
	<link rel="prefetch" href={`wp-includes/css/dashicons.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} />
	<link rel="prefetch" href={`wp-includes/css/buttons.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} />
	<link rel="prefetch" href={`wp-admin/css/forms.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} />
	<link rel="prefetch" href={`wp-admin/css/l10n.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} />
	<link rel="prefetch" href={`wp-admin/css/login.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} />
</svelte:head>

<h1>Hello world!</h1>

<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
<p><a href={`${base}/wp-admin`}>Go to WordPress admin</a>.</p>

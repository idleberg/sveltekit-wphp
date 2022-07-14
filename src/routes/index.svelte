<!-- This route is meant for the demo page only -->
<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths';
</script>

<h1>sveltekit-wphp</h1>

<p><a href={`${base}/wp-admin`}>Go to WordPress admin</a>.</p>

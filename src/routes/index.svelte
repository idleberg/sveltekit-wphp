<!-- This route is meant for the demo page only -->
<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths';
</script>

<h1>Hello world!</h1>

<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing</p>
<p><a href={`${base}/wp-admin`}>Go to WordPress admin</a>.</p>

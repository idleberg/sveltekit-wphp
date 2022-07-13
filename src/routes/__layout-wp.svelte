<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import LoginForm from '$components/LoginForm.svelte';
	import LostPasswordForm from '$components/LostPasswordForm.svelte';

	let isLogin = true;
	let isLoading = true;

	onMount(async () => {
		// Mimicking default WordPress behaviour
		document.body.className = document.body.className.replace('no-js', 'js');

		const searchParams = new URLSearchParams(window.location.search);
		isLogin = searchParams.has('action') && searchParams.get('action') === 'lostpassword' ? false : true;

		// Prevents layout shifts
		isLoading = false;
	});
</script>

{#if !isLoading}
	<div id="login">
		<h1><a href="https://wordpress.org/">Powered by WordPress</a></h1>

		{#if isLogin}
			<LoginForm />
		{:else}
			<LostPasswordForm />
		{/if}

		<p id="backtoblog">
			<a href="/">&larr; Go to {import.meta.env.VITE_SITE_NAME}</a>
		</p>
	</div>
	<div class="clear" />
{/if}

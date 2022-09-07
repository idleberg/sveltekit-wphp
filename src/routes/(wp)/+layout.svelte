<script lang="ts">
	import { base } from '$app/paths';
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

<svelte:head>
	<!-- Make it look like WordPress link-tags -->
	<link rel="stylesheet" id="dashicons-css" href={`wp-includes/css/dashicons.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} type="text/css" media="all" />
	<link rel="stylesheet" id="buttons-css" href={`wp-includes/css/buttons.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} type="text/css" media="all" />
	<link rel="stylesheet" id="forms-css" href={`wp-admin/css/forms.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} type="text/css" media="all" />
	<link rel="stylesheet" id="l10n-css" href={`wp-admin/css/l10n.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} type="text/css" media="all" />
	<link rel="stylesheet" id="login-css" href={`wp-admin/css/login.min.css?ver=${import.meta.env.VITE_WORDPRESS_VERSION}`} type="text/css" media="all" />
</svelte:head>

{#if !isLoading}
	<div id="login">
		<h1><a href="https://wordpress.org/">Powered by WordPress</a></h1>

		{#if isLogin}
			<LoginForm />
		{:else}
			<LostPasswordForm />
		{/if}

		<p id="backtoblog">
			<a href={base || '/'}>&larr; Go to {import.meta.env.VITE_SITE_NAME}</a>
		</p>
	</div>
	<div class="clear" />
{/if}

<script lang="ts">
	import { callback } from '$lib/callback';
	import { onMount } from 'svelte';
	import { randomResponse } from '$lib/util';
	import { page } from '$app/stores';

	let hasError = false;
	let errorMessage = '';

	let passwordInput: HTMLInputElement;
	let userLogin: string = '';

	onMount(() => {
		// Mimicking default WordPress behaviour
		passwordInput.focus();
	});

	const submitHandler = () => {
		setTimeout(() => {
			if (userLogin.length) {
				errorMessage = 'There is no account with that username or email address.';
			} else {
				errorMessage = 'Please enter a username or email address.';
			}

			hasError = true;
		}, randomResponse());

		callback({
			form: '#lostpasswordform',
			user: userLogin,
			timestamp: Date.now()
		});
	};
</script>

<svelte:head>
	<title>Lost Password &lsaquo; {import.meta.env.VITE_SITE_NAME ? `${import.meta.env.VITE_SITE_NAME} — WordPress` : 'WordPress'}</title>
	{#if import.meta.env.VITE_NO_INDEX}
		<meta name="robots" content="max-image-preview:large, noindex, noarchive" />
	{/if}
</svelte:head>

<p class="message">Please enter your username or email address. You will receive an email message with instructions on how to reset your password.</p>

{#if hasError}
	<div id="login_error">
		<strong>Error</strong>: {errorMessage}<br />
	</div>
{/if}

<form name="lostpasswordform" id="lostpasswordform" action="{$page.url.origin}/wp-login.php?action=lostpassword" method="post" class:shake={hasError} on:submit|preventDefault={submitHandler}>
	<p>
		<label for="user_login">Username or Email Address</label>
		<input type="text" name="user_login" id="user_login" class="input" bind:value={userLogin} size="20" autocapitalize="off" bind:this={passwordInput} />
	</p>

	<input type="hidden" name="redirect_to" value="" />

	<p class="submit">
		<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Get New Password" />
	</p>
</form>

<p id="nav">
	<a sveltekit:reload href="wp-login.php">Log in</a>
</p>

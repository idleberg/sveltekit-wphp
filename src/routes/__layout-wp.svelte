<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import LoginForm from '$components/LoginForm.svelte';
  import LostPasswordForm from '$components/LostPasswordForm.svelte';

  let isLogin = true;

  onMount(async () => {
    // Mimicking default WordPress behaviour
    document.body.className = document.body.className.replace("no-js", "js");

    const searchParams = new URLSearchParams(window.location.search);
    isLogin = searchParams.has('action') && searchParams.get('action') === 'lostpassword'
      ? false
      : true;
  });
</script>

<svelte:head>
  <link rel='stylesheet' id='dashicons-css' href={`wp-includes/css/dashicons.min.css?ver=${ import.meta.env.VITE_WORDPRESS_VERSION }`} type='text/css' media='all' />
  <link rel='stylesheet' id='buttons-css' href={`wp-includes/css/buttons.min.css?ver=${ import.meta.env.VITE_WORDPRESS_VERSION }`} type='text/css' media='all' />
  <link rel='stylesheet' id='forms-css' href={`wp-admin/css/forms.min.css?ver=${ import.meta.env.VITE_WORDPRESS_VERSION }`} type='text/css' media='all' />
  <link rel='stylesheet' id='l10n-css' href={`wp-admin/css/l10n.min.css?ver=${ import.meta.env.VITE_WORDPRESS_VERSION }`} type='text/css' media='all' />
  <link rel='stylesheet' id='login-css' href={`wp-admin/css/login.min.css?ver=${ import.meta.env.VITE_WORDPRESS_VERSION }`} type='text/css' media='all' />
</svelte:head>

<div id="login">
  <h1><a href="https://wordpress.org/">Powered by WordPress</a></h1>

  {#if isLogin}
    <LoginForm />
  {:else}
    <LostPasswordForm />
  {/if}

  <p id="backtoblog">
    <a href="/">&larr; Go to { import.meta.env.VITE_SITE_NAME }</a>
  </p>
</div>
<div class="clear" />

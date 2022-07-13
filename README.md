# sveltekit-wphp

A SvelteKit template to mock a WordPress login page, useful as a honeypot to monitor login attempts to your site.

## Installation

```sh
npx degit idleberg/sveltekit-wphp
cd sveltekit-wphp
pnpm install
```

:warning: Alternatively, you can clone the repository rather than using `degit` and repeat the following steps. However, it's not a recommended practice!

## Usage

You will want to edit `src/lib/callback.ts` according to your needs. By default, it logs to the browser console.

### Scripts

Listed below are the most important scripts for developers, but there are more to be found in [`package.json`](package.json).

#### `bootstrap`

Downloads WordPress and copies required files to the `static` folder. This runs automatically right after `pnpm install`.

#### `dev`

Starts the development server with hot module reloading

#### `build`

Builds the project. By default, the `@sveltekit/adapter-auto`is used. Your project might need a different SvelteKit adapter.

### Routes

This template only has routes configured for the WordPress login page: `wp-admin` and `wp-login.php`. The default route will produce a 404.

## License

This work is licensed under [The MIT License](LICENSE)

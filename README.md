# sveltekit-wphp

A SvelteKit app to mock a WordPress login page, useful as a honeypot to monitor login attempts to your site.

## Installation

```sh
npx degit idleberg/sveltekit-wphp
cd sveltekit-wphp
pnpm install
```

## Usage

You will want to edit `src/lib/callback.ts` according to your needs. By default, it logs to the browser console.

## License

This work is licensed under [The MIT License](LICENSE)

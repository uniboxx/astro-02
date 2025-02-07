import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: netlify(),

  integrations: [svelte(), auth()],

  vite: {
    plugins: [tailwindcss()],
  },
});
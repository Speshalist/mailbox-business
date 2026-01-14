// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Speshalist.github.io',  // Replace with your GitHub username
  base: '/mailbox-business',  // Replace with your actual repository name
  
  vite: {
    plugins: [tailwindcss()]
  }
});

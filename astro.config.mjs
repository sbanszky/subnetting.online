import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: true,
      port: 3000
    }
  }
});

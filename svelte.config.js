import { defineConfig } from '@sveltejs/kit';

export default defineConfig({
  kit: {
    prerender: {
      handleHttpError: ({ status, path, message }) => {
        if (status === 404) {
          console.warn(`Ignorando 404 em ${path}: ${message}`);
          return;
        }
        throw new Error(message);
      }
    }
  }
});
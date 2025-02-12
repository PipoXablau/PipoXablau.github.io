// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
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
};

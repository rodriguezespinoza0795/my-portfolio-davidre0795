import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  env: {
    apiUrl: 'http://localhost:4000',
  },
  e2e: {
    baseUrl: 'http://localhost:4000',
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

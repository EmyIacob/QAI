const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "htps://parabank.parasoft.com/parabank",
    defaultComandTimeout: '4000',
    specPattern: "cypress/integration/**/*.test.js",

  },
  retries: {
    runMode: 2,
    openMode: 0
  }
});

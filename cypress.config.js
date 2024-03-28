const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    // implement node event listeners here
    },
    //This configuration setting is specifying that Cypress should run test specs located in the cypress/e2e/ directory with a .js file extension.
    specPattern: 'cypress/e2e/*.js'   
  },
});


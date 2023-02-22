const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specPattern: [
    //   'tests/web-tables-test.cy.js',
    //   'tests/practice-form-test.cy.js',
    //   'tests/progress-bar-test.cy.js',
    // ],
    // TODO order run of files
  },
})

const { defineConfig } = require("cypress");
const path = require('path');

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome,mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/junit/results-[hash].xml'
    },
    mochawesomeReporterOptions: {
      reportDir: 'cypress/results/mochawesome',
      overwrite: false,
      html: false,
      json: true
    }
  },
  video: false,
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    setupNodeEvents(on, config) {
    },
  },
})

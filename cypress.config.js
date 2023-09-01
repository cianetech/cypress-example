const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});

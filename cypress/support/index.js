// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from 'mochawesome/addContext'

// Importação da config para code coverage
import '@cypress/code-coverage/support'

import '@shelex/cypress-allure-plugin';

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("test:after:run", (test, runnable) => {
  if(test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`);
  }

  let videoName = Cypress.spec.name
  videoName = `${videoName.replace('/.js.*', 'js')}.mp4`

  addContext({ test }, `videos/${videoName}`);
})
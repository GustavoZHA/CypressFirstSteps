// File upload in cypress
// SETUP
// Step 1 : Install plugin cypress-file-upload
// npm install --save-dev cypress-file-upload

// Step 2 : If you are using TypeScript, ensure your tsconfig.json contains
// "compilerOptions": {
//   "types": ["cypress", "cypress-file-upload"]  }

// Step 3 : Add to cypress/support/commands.js
// import 'cypress-file-upload';

// Step 4 :  Check this commands.js is imported in cypress/support/index.js 
// (it might be commented)
// // Import commands.js using ES2015 syntax:
// import './commands';


/// <reference types="cypress"/>
it('File Upload Test', function () {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')

})

// File download in cypress
// SETUP
// Step 1 : Install plugin cypress-downloadfile
// npm install cypress-downloadfile

// Step 2 : Add to cypress/support/commands.js
// require('cypress-downloadfile/lib/downloadFileCommand')

// Step 3 : Add to cypress/plugins/index.js

// const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
// module.exports = (on, config) =＞ {
//   on('task', {downloadFile}) }

//If exit a error review conf cypress.config.js

it('File Download Test', function () {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
})


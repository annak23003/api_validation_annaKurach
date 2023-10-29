import { defineConfig } from "cypress";
import fs from "fs-extra";
import { configurePlugin } from "cypress-mongodb";
const fs = require('fs')
import fs from 'fs';


export default defineConfig({
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    defaultCommandTimeout: 4000,
    // baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 1,
      runMode: 1
    },
    // specPattern: 'cypress/e2e/myTests/*.cy.js',
    setupNodeEvents(on, config) {
      on('task', {log(message) {console.log(message); return null }})
      on('task', {saveUrl(url) {fs.writeFileSync('url.json', JSON.stringify(url)); return null }})
      const newUrl = config.env.urlFromCli || 'https://www.guru99.com'
      config.baseUrl = newUrl

      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      configurePlugin(on);
      return config


      on('task', {
        saveUrls: async () => {
          //const fetch = require('node-fetch');
          const response = await fetch('https://www.guru99.com');
          const result = await response.text();
          
          //using a regular expression to find matching urls
          const urls = result.match(/https:\/\/www.guru99.com\/[\w-]+/g) || [];
    
          // save urls to a JSON file 
          fs.writeFileSync('urlsGuru.json', JSON.stringify(urls, null, 2));

        console.log('File is written');
        
        return urls;
      }, 
        catch (error) {
          console.error(`Error: ${error}`);
          throw error;
        }
    });
    return config
    },
  },
});
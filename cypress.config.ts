import { defineConfig } from "cypress";
import { configurePlugin } from "cypress-mongodb";
const fs = require('fs')
import fs from 'fs';

export default defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2',
      database: 'test'
    }
  },
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    // baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 2,
      runMode: 2
    },
    setupNodeEvents(on, config) {
      on('task', {log(message) {console.log(message); return null }})
      // implement node event listeners here
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

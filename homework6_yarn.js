//send a request to get data from
//https://reqres.in/api/users?page=1&per_page=5
//save the response in the json file

// import fetch from 'node-fetch';
const fetch = require('node-fetch');
const fs = require('fs')

const file = 'response_1694287579730.json';
const url = 'https://reqres.in/api/users?page=1&per_page=5'

async function writeData (baseUrl, file) {  
        const response = await fetch(baseUrl);
        const jsonData = await response.json();
        const result = JSON.stringify(jsonData)
        
        fs.writeFile(file, result, 'utf8', (err) => {
            if (err) {
                console.log(`Error while writing the file: ${err}`)
            }
            console.log("JSON data is written.");
        });
    }

writeData(url, 'test.json');



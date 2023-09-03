const values = require('./values.json')
const fs = require('fs')
const path = './values.json'

const clientData = {phone: 4324324, address: 'Street'};

function readingJson(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error while reading the file: ${err}`)
        } else {
            // parse JSON string to JSON object
            const newJsonFile = JSON.parse(data)
            console.log("File is read")
            console.log(newJsonFile)
        }
    });
}

readingJson('./values.json');

function writingJson(objectName, path) {
    const data2 = JSON.stringify(clientData)
    fs.writeFile(path, data2, 'utf8', err => {
        if (err) {
            console.log(`Error while writing the file: ${err}`)
        } else {
            console.log(`File is written`)
        }
    })
}

writingJson(clientData,'./client.json');

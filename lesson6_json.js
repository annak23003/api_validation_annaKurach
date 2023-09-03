const values = require('./values.json')
const fs = require('fs')
const path = './values.json'

const newData = {phone: 4324324, address: 'Street'};

// let obj1 = {name: "anna", lname: "kurach", age: 25};

// console.log(obj1);

// let jsonObj1 = JSON.stringify(obj1);
// console.log(jsonObj1);


// let obj2 = '{"name": "anna", "lname": "kurach", "age": 25}';

// console.log(obj2);

// let jsonObj2 = JSON.parse(obj2);
// console.log(jsonObj2.name);

// jsonObj2.city = "York";
// console.log(jsonObj2);

// jsonObj1 = JSON.stringify(jsonObj2);
// console.log(jsonObj1);

// console.log(values);

//fs.writeFile(path, JSON.stringify(newData));
const { writeFile, readFile } = require('fs');

readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    const parsedData = JSON.parse(data);
    parsedData.createdAt = new Date().toISOString();
    writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
      if (err) {
        console.log('Failed to write updated data to file');
        return;
      }
      console.log('Updated file successfully');
    });
  });





//     if (error) {
//         console.log(error)
//     }
//     return 
// ))

// function readD () {
//     fs.writeFile(path).then(rData) => {
//         return
//     }
// }

//  console.log(readData)


// function Func() {
//     fetch("./values.json")
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => console.log(data));
// }
// let dataFromFile = Func()

// console.log(dataFromFile)
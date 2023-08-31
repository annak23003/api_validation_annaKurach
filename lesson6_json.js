const values = require('./values.json')

let obj1 = {name: "anna", lname: "kurach", age: 25};

console.log(obj1);

let jsonObj1 = JSON.stringify(obj1);
console.log(jsonObj1);


let obj2 = '{"name": "anna", "lname": "kurach", "age": 25}';

console.log(obj2);

let jsonObj2 = JSON.parse(obj2);
console.log(jsonObj2.name);

jsonObj2.city = "York";
console.log(jsonObj2);

jsonObj1 = JSON.stringify(jsonObj2);
console.log(jsonObj1);

console.log(values);
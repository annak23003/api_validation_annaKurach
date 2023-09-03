//create a function that takes one param and inside makes the value Uppercase
//if the parameter not string type - console message about the incorrect type of data.

function makeUppercase (text) {
    if (typeof(text) === 'string') {
    let textToUpperCase = text.toUpperCase();
    console.log(textToUpperCase);
    } else {
        console.log('Type is not a string');
    }
};

makeUppercase('Hello world');


// create js function that add properties for the object, allowing only number

function addPropertiesToObject (object, p1, p2, p3) {
    if (typeof(p1) === 'number' && typeof(p2) === 'number' && typeof(p3) === 'number') {
        object.prop1 = p1;
        object.prop2 = p2;
        object.prop3 = p3;
    } else {
        console.log('At least one properties is not a number');
    }
};


// create JS object with 5 different properties

let objData = {name: "Anna", lname: "Kurach", age: 25, phone: 676483654, address: "Street"};


//with previously created function add a new property

addPropertiesToObject(objData, 1, 2, 3);
console.log(objData);


// check the function syntax and if some issues propose
// let sum == function{a, b} (
//     return a + b;
//   )

let sum = function(a, b) {
    return a + b;
}


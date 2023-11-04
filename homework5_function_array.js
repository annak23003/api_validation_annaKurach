//create array with 10 elements

let arrH = ['one', 'two', 3, 4, 5, true, 'seven', 8, 9, 'ten'];

//create a function that will add value to array under index 500

function functionAddValuesToArray (baseArr) {
    
    baseArr.length = 500;
    if (baseArr.length = 500) {
        baseArr.splice(500, 0, 'fff')
        console.log(arrH[500]);
    } else  {
        console.log('Error during adding value to array');
    };  
};

functionAddValuesToArray (arrH);

//create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers

function createArrayWithNumbers (baseArray) {
    let newArr = [];
    for (let i = 0; i < baseArray.length; i++) {
        if (typeof baseArray[i] === 'number') {
            newArr.push(baseArray.at(i))
        }
    };
    console.log(newArr);
}
createArrayWithNumbers(arrH);


function createArrayWithString (baseArray) {
    let newArr = [];
    for (let i = 0; i < baseArray.length; i++) {
        if (typeof baseArray[i] === 'string') {
            newArr.push(baseArray.at(i))
        }
    };
    console.log(newArr);
}
createArrayWithString(arrH);
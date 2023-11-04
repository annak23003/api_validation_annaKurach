let arr1 = ['kil', 'ooo', 343, 'jdujf', 2390, true, function() {console.log('Hello world')}];

let value = arr1[3];
console.log(value);

arr1[3] = 'New'

console.log(value);
console.log(arr1);

arr1[6]();

console.log(arr1.at(-2));

async function getOnlyString(baseArr) {

let result = [];
resultWithUpperC = [];

for (let i = 0; i < baseArr.length; i++) {
    //console.log(arr1[i]); 
    if (typeof baseArr[i] === 'string') {
        result.push(baseArr.at(i))
    }
};

for (let y = 0; y < result.length; y++) {
    let word = result.at(y)
    let firstLetter = String(word[0]).toUpperCase();
    let restLetters = String(word.slice(1));
    await resultWithUpperC.push(firstLetter + restLetters);
}
console.log(resultWithUpperC)
};

getOnlyString(arr1);
// console.log(resultWithUpperC);


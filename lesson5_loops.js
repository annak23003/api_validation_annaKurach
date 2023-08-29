let num215 = 215;

if (num215 == 215) {
    console.log('yes. value under condition')
    console.log('1')
    console.log('2')
};

if (num215 >= 215 && num215 < 250) {
    console.log('Second condition works')
};

if (num215 > 300) {
    console.log('num215 varaible greater than 300')
} else {
    console.log('code goes to the else')
};

if (num215 > 300) {
    console.log('num215 varaible greater than 300')
} else if (num215 >= 250) {
    console.log('num215 varaible greater than 250')
} else if (num215 >= 200){
    console.log('num215 varaible greater than 200')
} else if (Number.isInteger(num215)){
    console.log('num215 is integer')
} else {
    console.log('code goes to the else')
};

//ternary operator
              let resTernary = (num215 >= 200) ? 'ternary true' : 
              (num215 >= 250) ? 'greater than 250':
              'ternary false';
              console.log(resTernary);

let val2 = 'txt';

if (val2 == 'New York') {
    //action
};



//while

let num = 10;

while (num <=7) {
    console.log(num)
    num++
};

// do while

do {
    num++
    console.log(num)
} while (num <=7);

// for

let sumOLoop = 0;

for (let i = 0; i < 7; i+=2) {
    console.log(i)
    if (i == 6) break
    sumOLoop += i
};

console.log(sumOLoop);

let sumOLoop2 = 0;

for (let i = 0; i < 10; i+=2) {
    if (i == 6) continue
    console.log(i)
    sumOLoop2 += i
};

console.log(sumOLoop2);

//for in, for of

const obj1 = {prop1:1, prop2:2, prop3:'value'}

for (let prop in obj1) {
    console.log(prop)
};

for (let prop in obj1) {
    console.log(`${obj1[prop]}`)
    if (`${obj1[prop]}` == 'New') {
        console.log
    }
};

const arr1 = ['valar1', 'valar2', 'valar2'];

for (let valOfArr in arr1) {
    console.log(arr1[valOfArr])
};

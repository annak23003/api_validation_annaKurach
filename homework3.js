//rewrite to while
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }

let x = 0;
while (x < 3) {
    console.log(`number ${x}!`)
    x++
};

//create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2 and console every time that number.

for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) continue
        let NotDivide = i
        console.log(`NotDivide = ${NotDivide}`)
};

//create loop with condition from 0 to 10, and jump to the next iteration when i is 5.

for (let j = 0; j <= 10; j++) {
    if (j < 5) continue
    console.log(`j = ${j}`)
};


//create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

let n = 7;

if (n <= 10) {
    console.log("Hello")
} else if (n > 10) {
    console.log("Bye")
} else {
    console.log("Error during cycle execution")
}


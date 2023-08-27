//let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y).

let x = 5;
let y = 5;
x *= y;
console.log(x);

//create new variable 'let1' in lower case.

let let1 = 'like to listen';

// Update value 'let1' to upper case.

let1 = let1.toUpperCase();

// Create another variable with few words and contain 'let1'. use method replace to word 'BANG'

let let2 = `I ${let1} to the BANG song`;
console.log(let2);
let w = 'BANG';
let2 = let2.replace(w, 'UMBRELLA');
console.log(let2);

// create comparison operator to log true, when x is NOT equal to y.

let letComp1 = (x != y);   // not equal in value
let letComp2 = (x !== y);  // not equal in value and type
console.log(letComp1); 
console.log(letComp2);

// create variable with using addition assignment (+=) for two numbers

let letAssig = (x += y);
console.log(letAssig);

// create variable that should be 'false' with using equality operator

let letEqual = (x == y);
console.log(letEqual);



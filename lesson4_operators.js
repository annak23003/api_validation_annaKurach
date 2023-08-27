// let num1 = 3
// let num2 = 5
// let resN = `${num1 + num2}`

let operPercent = 5%2
console.log(operPercent)

let operModul = 2 ** 10
console.log(operModul)

//let x = 5
//++x
// console.log(x)

//comparison operators
let x = 5
let x2 = 'I like to play in football NOT'

console.log(typeof x)
// x2 = Number(x2)
console.log(typeof x2)

let resComparisom = x !== x2
console.log(resComparisom)

let myComp = 33 <= 100
console.log(myComp)

//operators logical

let t1 = true
let t2 = false
let logicOperAnd = (x > 1 && x < 6)

console.log(logicOperAnd)

let logicOperOr = (x == 5 || x >=100)
console.log(`Result ${logicOperOr}`)

//(x&&y || x >=100 && x==100) 
let logicOperNot = !(x == 5)
console.log(logicOperNot)

//String operations

// let lX2 = x2.length
let lX2 = x2.slice(18, 26)
console.log(lX2)

let lX3 = x2.substring(18, 26)
console.log(lX3)

let n = 'not'
x2 = x2.replace (n, 'YES')
console.log(x2)
n = n.toUpperCase()
x2 = x2.replace (n, 'YES')
console.log(x2)

n = n.toLowerCase()

let txtConcat = lX3.concat(' ', n)
console.log(txtConcat)

let txtwithTrash = '          original text       '
console.log(txtwithTrash.trim())

console.log(Number.isInteger(x))

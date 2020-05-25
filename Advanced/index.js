console.log('js is running...')

const a = 7
const b = 14
const c = "21"
const d = '36'
const e = 42

const result = a + b + parseInt(c) + parseInt(d) + 42
console.log(result)

const result2 = a + b + Number(c) + Number(d) + 42
console.log(result2)

const f = '1'

const g = 15

const h = 8

const i = "1"

const multiply = parseInt(f) * g * h * parseInt(i)

console.log(multiply)

const divided = result / multiply
console.log(divided)

const arr = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

/* Select and output the numbers 11, 25, 17, 27 and 0 in the console. */

console.log("11", arr[1][1])
console.log("25", arr[4][2])
console.log("17", arr[5][3])
console.log("27", arr[2][3])
console.log("0", arr[2][1])
const prom = [9, 5, 8, 6.5]

let list = prom.filter((p) => p >6)
console.log(list)
console.log(list.reduce((sum, p) => sum + p, 0)/3)

const nums = [1, 2, 3, 4, 5, 6]

let pares = nums.filter((n) => n%2==0)
console.log(pares)
let cuadr = pares.map((n) => n*n)

console.log(cuadr.sort((a,b) => b-a))

const orden = ["pera", "Manzana", "uva", "Árbol"]
const es = (x, y) => x.localeCompare(y, "es")
orden.sort(es)
console.log(orden)
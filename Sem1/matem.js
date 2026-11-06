const x = 1234.5678;
console.log(x.toFixed(2)) // "1234.57"
console.log(typeof x.toFixed(2)) // string
console.log(Number (x.toFixed(2))) // 1234.57
console.log((255).toString(2)) // 11111111 (binario)
const peso = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN"});
console.log(peso.format(x)) // $1,234.57

Math.round(2.5) // 3
Math.round(-2.5) // -2
0.1 + 0.2 // 0.30000000000004
0.1 + 0.2 === 0.3 // false


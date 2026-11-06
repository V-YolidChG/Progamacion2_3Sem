function redondear(n, decimales){
    n = 3.14159
    decimales = 2
    return Number(n.toFixed(decimales))
}
console.log(redondear())
console.log(typeof redondear())

const texto = "8, 9.5, x, 7, , 10"
const numeros = texto
.split(",")
.map(s => s.trim())
.filter(s => s!== "")
.map(Number)
.filter(n => !Number.isNaN(n));

const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma);

let promedio = Number((suma / numeros.lenght).toFixed(2));;


console.log(promedio);
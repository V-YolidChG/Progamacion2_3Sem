let lista = ["Aaron", "Yolis", "Yolanda", "Dante", "Nino"]
let lista2 = ["Minna", "Paola", "Ximena", "Amy", "Matias"]

console.log(lista.push("Vania"))
console.log(lista)
console.log(lista.pop())
console.log(lista)
console.log(lista.unshift("Clara"))
console.log(lista)
console.log(lista.shift())
console.log(lista)

let frutas = ["manzana", "naranja", "uva", "pera"]
let resultado = frutas.splice(1,2)
console.log(resultado)

let reemplazarElemento = frutas.splice(1,1,"Piña");
console.log(reemplazarElemento)
let insertarElemento = frutas.splice(1,0, "Pera", "Uva")
console.log(insertarElemento)

const b = [1, 2, 3, 4, 5];
console.log(b.splice(1,2));
// [2,3]
console.log(b)
//[1, 4, 5]
b.splice(1,0,"x", "y");
console.log(b);
// [1, "x", "y", 4, 5]
console.log(b.slice(1,3));
// ["x", "y"] (b no cambia) 

const n = [5, 12, 8, 130, 44];
n.indexOf(8) //2
n.includes(130)// true
n.find((x) => x >10)// 1
n.findIndex((X) => X >10)// 1
n.find((x) => x>1000)//undefined
n.some((x) => x> 100) // 100
n.every((x) => x > 5)// false

const precios =[100, 250, 80, 400];
precios.map((p) => p + 20) // [120,270,100,420]
precios.filter((p) => p >150) // [250,400]
console.log(precios.reduce((acum, p) => acum + p, 200))// 830

const nums = [10, 9, 1, 100];
[...nums].sort();
// [1, 10, 100, 9]
[...nums].sort((a, b) => a - b);
// [1, 9, 10, 100]
[...nums].sort((a,b) => b - a);
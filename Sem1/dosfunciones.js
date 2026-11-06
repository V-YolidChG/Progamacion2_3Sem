const txt = prompt("Escriba una palabra:")
txt.toLowerCase();
const minus = txt.toLowerCase();

let vocal1 = minus.split("i")
let vocal2 = minus.split("u")
let vocal3 = minus.split("a")
let vocal4 = minus.split("o")
let vocal5 = minus.split("e")

let vocales = vocal1.length-1 + vocal2.length-1 + vocal3.length-1 + vocal4.length-1 + vocal5.length-1

console.log(vocales)

const pal = prompt("Escriba una palabra:")
pal.toLowerCase();

const pal1 = pal.toLowerCase();
pal1.replace(/[ *]/g, "");
const pal2 = pal1.replace(/[ *]/g, "");
const pal3 = pal2.reverse
const real = true

if(pal2===pal3){
    real
    console.log("Es palíndromo")
} else if(pal2!=pal3) {
    real == false
    console.log("No es palíndromo")
}
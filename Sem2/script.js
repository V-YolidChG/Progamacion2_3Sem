const nombre = prompt("Ingrese el nombre del producto: ");
const precio = parseInt(prompt("Ingrese el precio del producto: "));
let cantidad = parseInt(prompt("Ingrese la cantidad que quiere: "));
let desc = parseInt(prompt("Ingrese el descuento: "));
let envio = true;
const costo= 45;

const subtotal = precio*cantidad ;
let total1 = subtotal-desc ;
let total2 = total1+costo ;

console.log("Producto: " + nombre);
console.log("Precio individual: " + precio);
console.log("Cantidad: " + cantidad);
console.log("Descuento: " + desc);
console.log("Envío incluido: " + envio);
console.log("Total a pagar: "+ total2);
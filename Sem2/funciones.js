
function descuento(precio, porcentaje = 10){
    //precio = prompt("Escriba el precio")
    //porcentaje = prompt("Escriba el porcentaje de descuento. Ej. 25 de desc = 0.75")
    return precio -(precio*porcentaje)/100
}
console.log(descuento(4000,30), descuento())

function promedio(...notas){
    const prom = notas.reduce((a,b) => a+b, 0)/notas.length
    if(prom===0){
        return "0"
    } else {
    return prom
    }
}
console.log(promedio(10, 9, 10,7,10,7), promedio())

function aplicarDosVeces (fn, x){
    return fn(x)
}
console.log(aplicarDosVeces((n) => n**2, 4))
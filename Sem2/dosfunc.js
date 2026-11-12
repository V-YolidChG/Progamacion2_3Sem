function esPrimo(n){   
    if (n % 2 === 1) 
    return true
    if (n % 2 === 0) 
    return false
    
}
console.log(esPrimo(7))
console.log(esPrimo(1))

function convertirTemperatura(v, de, a){

    if (de === "C"){
        if (a === "F")
            return (v*9/5)+32;
        else if(a === "K")
            return v+273.15;
        
    } else if (de === "F"){
        if(a=== "C")
            return (v-32)*5/9;
         else if(a === "K")
            return (v-32)*5/9+273.15;
        
    } else if (de === "K"){
        if(a === "F")
            return (v-273.15)*9/5+32;
        else if(a === "C")
            return v-273.15;
    } 
}
console.log(convertirTemperatura(50, "F", "K"))
const alfabeto = "abcdefghijklmnñopqrstuvwxyz".split("");

function desplazar(texto, desplazamiento) {
  const n = alfabeto.length;
  let resultado = "";

  for (const caracter of texto.toLowerCase()) {
    const posicion = alfabeto.indexOf(caracter);

    if (posicion === -1) {
      
      resultado += caracter;
    } else {
      
      const nuevaPosicion = (((posicion + desplazamiento) % n) + n) % n;
      resultado += alfabeto[nuevaPosicion];
    }
  }
  return resultado;
}

function cifrar(texto, desplazamiento) {
  return desplazar(texto, desplazamiento);
}

function descifrar(texto, desplazamiento) {
  return desplazar(texto, -desplazamiento); 
}

function esMensajeCifrado(original, mensaje, desplazamiento) {
  return cifrar(original, desplazamiento) === mensaje.toLowerCase();
}

console.log(cifrar("hola mundo", 3));        // "krñd pxqgr"
console.log(descifrar("krñd pxqgr", 3));     // "hola mundo"
console.log(esMensajeCifrado("hola mundo", "krñd pxqgr", 3)); // true
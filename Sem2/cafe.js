const registro =  "  Café: 35.50; té verde : 28 ; Pan Dulce:18.5 ; CAFÉ:35.5;; galleta de avena: 22.10;  Té Verde:28 ; Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; ;Jugo de Naranja:40 ; Sándwich:55.75; té verde: -10; :15; Pan dulce:18.5; Café :35.5 ; Sándwich : 55.75 ; galleta de avena:";
console.log(registro)
const registro2 = registro.length
console.log(registro2)
const limpio = registro2.normalize("NFD").replace(/[-*]/g, "");
console.log(limpio)
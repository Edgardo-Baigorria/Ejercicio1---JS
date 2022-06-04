let ingredientes = ["harina", "agua", "sal", "oregano", "tomate", "jamon", "mozzarella", "aceitunas", "ananá", "levadura"];
let pares = [];
let impares = [];

function separador() {

    for (let i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].length % 2 == 0) {
            pares.push(ingredientes[i]);
        }
        else {
            impares.push(ingredientes[i]);
        }
    }
    console.log(`Los ingredientes pares son: ${pares}.
Los ingredientes impares son: ${impares}`)
}

separador();

console.log("perdón por esta pizza")
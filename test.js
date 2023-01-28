let nombre = "Cesar Luis";
let apellido = "Cubarrubia";
let platziUser = "clch2409";
let email = "clch409@hotmail.com";
let edad = 20;
let mayorEdad = true;
let dineroAhorrado = 350.10;
let deudas = 100;

let nombreCompleto = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;

console.log("Nombre del Usuario: " + nombreCompleto + "\nDinero real: " + dineroReal)

let verdad = true

while (verdad){
    let numero = parseInt(prompt("¿Cuánto es 2+2?"))
    if (numero === 4){
        alert("Felicidades, estás en lo correcto")
        verdad = false
    }
    else{
        alert("Es incorrecto, pero sigue intentando, tú puedes")
    }
}


//* Siempre guardar las etiquetas de HTML en variables

//! querySelector -> Selecciona los elementos dependiendo de la etiqueta referida(Funciona como el selector de CSS)
 const h1 = document.querySelector("h1");
/* const p = document.querySelector("p");
 const parrafito = document.querySelector(".parrafito");
 const pid = document.querySelector("#pid");
 const input = document.querySelector("input");

 console.log({
     h1,
     p,
     parrafito,
     pid,
     input
 });*/

//* Crear un elemento HTML
const img = document.createElement("img")

//* Agregando atributo al elemento con su contenido
/* img.setAttribute("src", "./assets/js.webp")
 img.setAttribute("width", "50px")
 img.setAttribute("height", "50px")*/

//* Modificando el texto dentro de una etiqueta
// pid.innerHTML = "";

//! Diferancia entre innerHTML e innerText
//* innerHTML -> Se pueden agregar etiquetas HTML y texto
//* innerText -> Se agrega solo texto, no lee etiquetas HTML

//* Agregando el elemento creado al HTML
// pid.appendChild(img)

const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#form");
const mensaje = document.querySelector("#mensaje")
const mensaje2 = document.querySelector("#mensaje2")

//* El evento 'submit' es especial en los formularios y recarga la página
btn.addEventListener('click', botonClick)
btn.addEventListener('mouseover', colocarPointer)
btn.addEventListener('mouseout', quitarPointer)
btn.addEventListener('mousedown', presionar)
btn.addEventListener('mouseup', dejarPresionar)
input1.addEventListener('focusin', tieneFocus)
input1.addEventListener('focusout', pierdeFocus)
input2.addEventListener('focusin', tieneFocus)
input2.addEventListener('focusout', pierdeFocus)

function botonClick(event){
    //* Para evitar que se recargue la página (evento predeterminado al submit), se usa el método 'preventDefault()'
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText= "El resultado de la suma es: " + sumaInputs;
}

function colocarPointer(){
    mensaje.innerText = "Acabas de colocar el mouse encima del botón";
}

function quitarPointer(){
    mensaje.innerText = "Ya el mouse no está encima del botón"
}

function presionar(){
    mensaje.innerText = "Estás presionando el botón"
}

function dejarPresionar(){
    mensaje.innerText = "Dejaste de presionar el boton"
}

function tieneFocus(){
    mensaje2.innerText = "Alguno de los dos inputs tiene focus"
}

function pierdeFocus(){
    mensaje2.innerHTML = "Ahora perdieron el focus"
}
//-----Elementos----//

const btnEncriptar = document.querySelector(".btn__encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto__aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta__contenedor");
const btnCopiar = document.querySelector(".btn__copiar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

//-----FUNCIONES DE ENCRIPTAR-----//

btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto === "") {
        aviso.style.backgroundColor = "#0A3871";
        aviso.style.color = "aqua";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "solo letras minusculas y sin acentos"; // Restablecer el texto original
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.backgroundColor = "#0A3871";
        aviso.style.color = "aqua";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "solo letras minusculas y sin acentos"; // Restablecer el texto original
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.backgroundColor = "#0A3871";
        aviso.style.color = "aqua";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "solo letras minusculas y sin acentos"; // Restablecer el texto original
        }, 1500);
    } else {
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        respuesta.value = texto;
        btnCopiar.style.visibility = "visible";
        if (contenido) {
            contenido.remove();
        }
    }
});

//-----FUNCIONES DE DESENCRIPTAR-----//

btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto === "") {
        aviso.style.backgroundColor = "#0A3871";
        aviso.style.color = "aqua";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "solo letras minusculas y sin acentos"; // Restablecer el texto original
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.backgroundColor = "#0A3871";
        aviso.style.color = "aqua";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "solo letras minusculas y sin acentos"; // Restablecer el texto original
        }, 1500);
    } else if (texto !== texto.toLowerCase()) {
        aviso.style.backgroundColor = "#0A3871";
        aviso.style.color = "aqua";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "solo letras minusculas y sin acentos"; // Restablecer el texto original
        }, 1500);
    } else {
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        respuesta.value = texto;
        btnCopiar.style.visibility = "visible";
        if (contenido) {
            contenido.remove();
        }
    }
});

//-----FUNCIONES DE COPIAR-----//

btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    respuesta.select();
    document.execCommand("copy");
});

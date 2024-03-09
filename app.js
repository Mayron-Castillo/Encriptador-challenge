
let mensajeEncriptar = document.querySelector("#mensajeEncriptar");
let minuscula = mensajeEncriptar.value.toLowerCase();
let resultadoFinal = document.querySelector("#resultadoFinal");
let botonCopiar = document.querySelector("#btnCopiar")

let encriptacion = [ 
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];


function btnEncriptar(){
    let minuscula = mensajeEncriptar.value.toLowerCase();
    let text1 = encriptar(minuscula);
    resultadoFinal.innerHTML = text1;
    details();
    return;
}


function encriptar(mensajeEncriptado){
    let indices = [];
    let sample = mensajeEncriptado.split("");
    for (let i = 0; i < encriptacion.length; i++) {
        if(mensajeEncriptado.includes(encriptacion[i][0])){
            let index = sample.indexOf(encriptacion[i][0]);
            while (index !=-1) {
                indices.push(index);
                index = sample.indexOf(encriptacion[i][0], index + 1);
            }
            for (let j = 0; j < indices.length; j++) {
                sample[indices[j]] = encriptacion[i][1];
            }
        }
        indices=[];
    }
    return sample.join('');
}


function btnDesencriptar(){
    let minuscula = mensajeEncriptar.value.toLowerCase();
    let text2 = desencriptacion(minuscula);
    resultadoFinal.innerHTML = text2;
    details();
    return;
}


function desencriptacion(desencriptarMensaje){
    for (let k = encriptacion.length -1; k >= 0; k--) {
        if (desencriptarMensaje.includes(encriptacion[k][1])) {
            desencriptarMensaje = desencriptarMensaje.replaceAll(
                (encriptacion[k][1]),
                (encriptacion[k][0])
            )
        }
    }
    return desencriptarMensaje;
}


function copiar() {
    let text3 = resultadoFinal.innerHTML;
    navigator.clipboard.writeText(text3);
    botonCopiar.textContent = "\u2705 Copiado";
}


function details() {
    let pe = document.querySelector("#resultadoMensaje");
    if (mensajeEncriptar.value === "") {
        pe.removeAttribute("hidden");
        botonCopiar.setAttribute("hidden", "true");
    } else {
        pe.setAttribute("hidden", "true");
        botonCopiar.removeAttribute("hidden");
    }
    mensajeEncriptar.value = "";
    botonCopiar.textContent = "Copiar";
    return;
}


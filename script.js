const textArea = document.querySelector(".text__area");
const mensagem = document.querySelector(".mensagem");
const botaoColar = document.querySelector(".btn__paste");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    criaBotaoCopiar();
    document.getElementById("titulo__output").innerText = "Mensagem Criptografada!";
    document.getElementById("lanbel__output").innerText = "Clique no botão copiar para copiar o texto!"
    document.getElementById("img__output").remove();
}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    criaBotaoCopiar();
    document.getElementById("titulo__output").innerText = "Mensagem Descriptografada!";
    document.getElementById("lanbel__output").innerText = "Clique no botão copiar para copiar o texto!"
    document.getElementById("img__output").remove();
}

function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    try {
        navigator.clipboard.writeText(mensagem.value);
        alert("Texto copiado com sucesso!");
    } catch (err) {
        alert("Falha ao copiar texto:", err);
    }
    let imgProcurando = document.createElement("img");
    imgProcurando.setAttribute("id", "img__output");
    imgProcurando.setAttribute("src", "./assets/procurando.png");
    imgProcurando.setAttribute("alt", "alguém procurando com uma lupa");
    mensagem.value = "";
    document.getElementById("titulo__output").innerText = "Nenhuma mensagem encontrada!";
    document.getElementById("lanbel__output").innerText = "Digite um texto que você deseja criptografar ou descriptografar."
    document.getElementById("copy__btn").remove();
    document.getElementById("div__output__img").appendChild(imgProcurando);
}

function criaBotaoCopiar() {

    let btnCopiar = document.createElement("button");
    let btnTexto = document.createTextNode("Copiar");
    btnCopiar.appendChild(btnTexto);
    btnCopiar.setAttribute("type", "button");
    btnCopiar.setAttribute("id", "copy__btn");
    btnCopiar.setAttribute("class", "btn__copy");
    btnCopiar.setAttribute("onclick", "btnCopiar()");
    document.getElementById("div__btn").appendChild(btnCopiar);
}
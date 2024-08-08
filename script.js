document.addEventListener("DOMContentLoaded", function () {
    /* Implementar el encriptador y desencriptador de texto*/
    const texto = document.querySelector(".content__text1");
    const respuesta = document.querySelector(".content__text2");
    const btnCopiar = document.querySelector(".btnCopiar");
    const img = document.querySelector('.content__img');
    const mensaje = document.querySelector('.content__mensaje');

    function btnEncriptar(){
        const textoEncriptado = encriptar(texto.value);
        respuesta.value = textoEncriptado;
        texto.value = "";
        mostrarResultado();
    }

    function encriptar(stringEncriptada){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i=0; i<matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        return stringEncriptada;
    }

    function btnDesencriptar(){
        const textoEncriptado = Desencriptar(texto.value)
        respuesta.value = textoEncriptado;
        texto.value = "";
        mostrarResultado();
    }

    function Desencriptar(stringDesencriptar){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptar = stringDesencriptar.toLowerCase();

        for(let i=0; i<matrizCodigo.length; i++){
            if(stringDesencriptar.includes(matrizCodigo[i][1])){
                stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }
        }
        return stringDesencriptar;
    }

    function mostrarResultado() {
        respuesta.style.display = 'block';
        btnCopiar.style.display = 'block';
        img.style.display = 'none';
        mensaje.style.display = 'none';
        autoResize(respuesta); 
    }

    /*Ajustar el texto en el textarea*/
    function autoResize(textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }

    /*Permite el funcionamiento del boton 'copiar'*/
    function copiarText() {
        let text = document.querySelector('.content__text2');
        let btnCopiar = document.querySelector('.btnCopiar');

        navigator.clipboard.writeText(text.value).then(() => {
            btnCopiar.textContent = 'Copiado';
            setTimeout(() => btnCopiar.textContent = 'Copiar', 1000); 
        })
    }

    document.querySelector("button[onclick='btnEncriptar()']").addEventListener("click", btnEncriptar);
    document.querySelector("button[onclick='btnDesencriptar()']").addEventListener("click", btnDesencriptar);
    document.querySelector('.btnCopiar').addEventListener('click', copiarText);
    autoResize(respuesta);
});
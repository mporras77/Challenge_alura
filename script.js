// Función para encriptar texto solo si no contiene números
function encryptText() {
    var plaintext = document.querySelector('.editable-text').innerText.trim(); // Obtener el texto plano del div editable y eliminar espacios en blanco al inicio y final
    
    if (/\d/.test(plaintext)) {
        alert('Si el código tiene números, no se puede encriptar.');
    } else {
        var ciphertext = CryptoJS.AES.encrypt(plaintext, 'clave-secreta').toString(); // Encriptar con AES y convertir a string
        document.getElementById('encrypted-text').value = ciphertext; // Mostrar el texto encriptado en el textarea
        
        // Ocultar elementos después de encriptar
        document.querySelector('.textarea-container img').style.display = 'none'; // Ocultar la imagen dentro de .textarea-container
        document.querySelector('.message-large').style.display = 'none'; // Ocultar el mensaje large
        document.querySelector('.message-small').style.display = 'none'; // Ocultar el mensaje small
    }
}


// Función para desencriptar texto
function decryptText() {
    var ciphertext = document.getElementById('encrypted-text').value; // Obtenemos el texto encriptado desde el textarea
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'clave-secreta'); // Desencriptamos con AES
    var plaintext = bytes.toString(CryptoJS.enc.Utf8); // Convertimos los bytes a texto plano
    document.querySelector('.editable-text').innerText = plaintext; // Mostramos el texto desencriptado en el div editable
    document.getElementById('encrypted-text').value = ''; // Limpiamos el textarea de texto encriptado
}

// Función para copiar texto al portapapeles
function copyText() {
    var copyText = document.getElementById('encrypted-text');
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
}

// Función para manejar cambios en el input editable
function handleInput(event) {
    // Puedes añadir aquí cualquier manejo adicional que desees al cambiar el texto editable
}

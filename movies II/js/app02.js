
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
       
        var nombre = document.getElementById("nombre").value.trim();
        var apellido = document.getElementById("apellido").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        var isValid = true;

     

        if (nombre === "") {
            displayErrorMessage("userNombreError", "Por favor ingrese un nombre.");
            isValid = false;
        }
        if (apellido === "") {
            displayErrorMessage("userApellidoError", "Por favor ingrese un apellido.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            // Aquí puedes enviar el formulario si todos los campos son válidos
            alert("¡Formulario enviado correctamente!");
            // Por ejemplo:
            // document.getElementById("loginForm").submit();
        }
    });
});

function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element) {
        element.innerText = "";
    });
}

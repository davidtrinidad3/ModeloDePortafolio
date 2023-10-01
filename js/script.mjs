 export function valida(input) {
    const tipoDeInput = input.dataset.tipo
  
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
  };

  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
  ]
  
  const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Mínimo 2 caracteres y máximo 40 caracteres",

    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "Este correo no es válido; Ejemplo: texto@texto.com",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "Mínimo 4 caracteres y máximo 50 caracteres",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        typeMismatch: "máximo 300 caracteres",
    },
  };

  function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( (error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
  }
 
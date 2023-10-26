alert("Bienvenido!😊");



function suscribirse() {
  let email = document.getElementById("correo2").value;
  
  if (email.trim() === "") {
    alert("Por favor, completa correctamente el campo de correo electrónico");

  } else if (!validarCorreoElectronico(email)) {

    alert("Por favor, ingresa un correo electrónico válido."); 
    
  }else{
    alert("¡Te has suscrito con éxito!👍😃");
    
  }
}

function validarCorreoElectronico(email) {
  const regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreoElectronico.test(email);
}


function validarFormulario() {
  let nombre = document.getElementById("Nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let texto = document.getElementById("texto").value;

  if (nombre.trim() === "" || correo.trim() === "" ||telefono.trim() === "" || texto.trim() === "") {
      alert("Por favor, completa todos los campos.");
      
  }alert("Tus datos se han enviado!✔ te contestaremos a la brevedad a traves del mail que nos mandaste!");
  
  document.getElementById("formularioPrincipal").reset();
  
}

//-----MODO OSCURO------

const modo = document.querySelector(".switch");
let tema = "oscuro";
modo.addEventListener("click", e =>{
  let pregunta = confirm(`Estas seguro de que quieres cambiar a modo ${tema}`) 
  if (pregunta === true) {
     modo.classList.toggle("active");
     tema=="claro"?tema="oscuro":tema="claro";
  }
 
  document.body.classList.toggle("active");
})
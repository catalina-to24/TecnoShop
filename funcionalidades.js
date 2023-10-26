alert("Bienvenido!😊");


  function suscribirse() {
    alert("¡Te has suscrito con éxito!👍😃");

    
}

function validarFormulario() {
  let nombre = document.getElementById("Nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let texto = document.getElementById("texto").value;

  if (nombre.trim() === "" || correo.trim() === "" || telefono.trim() === "" || texto.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return false; // Evita que el formulario se envíe
  }alert("Tus datos se han enviado!✔ te contestaremos a la brevedad a traves del mail que nos mandaste!");
  
  document.getElementById("formularioPrincipal").reset();
  
}

//-----MODO OSCURO------

const modo = document.querySelector(".switch");

modo.addEventListener("click", e =>{
  modo.classList.toggle("active");
  document.body.classList.toggle("active");
})
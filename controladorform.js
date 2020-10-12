let cajaNombres = document.getElementById("nombre");
let cajaApellidos = document.getElementById("apellido");
let cajaEmail = document.getElementById("email");
let optionMasculino = document.getElementById("masculino");
let optionFemenino = document.getElementById("femenino");
let cajapassword = document.getElementById("password");
let botonEnviar = document.getElementById("submit");
let mensajeAlertaNombre = document.getElementById("ayudaNombre");
let mensajeAlertaApellido = document.getElementById("ayudaApellido");
let mensajeAlertaEmail = document.getElementById("ayudaEmail");
let mensajeAlertaPassword = document.getElementById("ayudaPassword");

//creo evento escuchar click boton enviar
botonEnviar.addEventListener("click", validarFormulario);

//desactivarautomatico boton submit
function validarFormulario(event)
{
event.preventDefault();

if(cajaNombres.value =="" && cajaApellidos.value =="" && cajaEmail.value =="" && cajapassword.value ==""){
    cajaNombres.classList.add("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.add("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "Digita tus Nombres";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "Digita tu Email";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
   
}
else if(cajaNombres.value !="" && cajaApellidos.value =="" && cajaEmail.value =="" && cajapassword.value =="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.add("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "Digita tu Email";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
    
}
else if(cajaNombres.value !="" && cajaApellidos.value !="" && cajaEmail.value =="" && cajapassword.value =="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.add("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "Digita tu Email";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
    
}
else if(cajaNombres.value !="" && cajaApellidos.value !="" && cajaEmail.value !="" && cajapassword.value =="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
    
}
 

else if(cajaNombres.value =="" && cajaApellidos.value !="" && cajaEmail.value !="" && cajapassword.value !="")
{
    cajaNombres.classList.add("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "Digita tus nombres";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "";
}
else if(cajaNombres.value !="" && cajaApellidos.value =="" && cajaEmail.value !="" && cajapassword.value !="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "";
   
}
else if(cajaNombres.value !="" && cajaApellidos.value !="" && cajaEmail.value =="" && cajapassword.value !="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.add("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "Digita tu email";
    mensajeAlertaPassword.textContent = "";
   
}
else if(cajaNombres.value !="" && cajaApellidos.value !="" && cajaEmail.value !="" && cajapassword.value =="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
   
}
else if(cajaNombres.value =="" && cajaApellidos.value =="" && cajaEmail.value !="" && cajapassword.value !="")
{
    cajaNombres.classList.add("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "Digita tus nombres";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "";
}
else if(cajaNombres.value =="" && cajaApellidos.value =="" && cajaEmail.value =="" && cajapassword.value !="")
{
    cajaNombres.classList.add("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.add("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "Digita tus nombres";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "Digita tu email";
    mensajeAlertaPassword.textContent = "";
} 
else if(cajaNombres.value !="" && cajaApellidos.value =="" && cajaEmail.value =="" && cajapassword.value !="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.add("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "Digita tu email";
    mensajeAlertaPassword.textContent = "";
}
else if(cajaNombres.value =="" && cajaApellidos.value !="" && cajaEmail.value =="" && cajapassword.value !="")
{
    cajaNombres.classList.add("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.add("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "Digita tus nombres";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "Digita tu email";
    mensajeAlertaPassword.textContent = "";
}    
else if(cajaNombres.value =="" && cajaApellidos.value =="" && cajaEmail.value !="" && cajapassword.value =="")
{
    cajaNombres.classList.add("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "Digita tus nombres";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
}
else if(cajaNombres.value !="" && cajaApellidos.value =="" && cajaEmail.value !="" && cajapassword.value =="")
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.add("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "Digita tus apellidos";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
}
else if(cajaNombres.value =="" && cajaApellidos.value !="" && cajaEmail.value !="" && cajapassword.value =="")
{
    cajaNombres.classList.add("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.add("is-invalid");
    mensajeAlertaNombre.textContent = "Digita tus nombres";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "Digita la clave que asignaras";
}
else 
{
    cajaNombres.classList.remove("is-invalid");
    cajaApellidos.classList.remove("is-invalid");
    cajaEmail.classList.remove("is-invalid");
    cajapassword.classList.remove("is-invalid");
    mensajeAlertaNombre.textContent = "";
    mensajeAlertaApellido.textContent = "";
    mensajeAlertaEmail.textContent = "";
    mensajeAlertaPassword.textContent = "";
    
    //entra el backend
}
}
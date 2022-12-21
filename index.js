// const mostrarTxt=document.getElementById("mostrarTxt");
// const mostrarTxt_btn=document.getElementById("mostrarTxt_btn");

// mostrarTxt_btn.addEventListener("click",toggleText);

// function toggleText(){
//      mostrarTxt.classList.toggle('show');
//      if(mostrarTxt.classList.contains('show')){
//       mostrarTxt_btn.innerHTML="leer menos";
//      }else{
//       mostrarTxt_btn.innerHTML="leer mas";
//      }
// }

const nombre=document.getElementById("nombre");
const apellidos=document.getElementById("apellidos");
const correo=document.getElementById("correo");
const contraseña=document.getElementById("contraseña");
const btn=document.getElementById("btn");

btn.addEventListener("click",formulario);

function formulario(){
     let nombreVal=nombre.value;
     let apellidosVal=apellidos.value;
     let correoVal=correo.value;
     let contraseñaVal=contraseña.value;

     if(nombreVal=="" || apellidosVal=="" || correoVal=="" || contraseñaVal==""){
          console.log("verifica tus datos");
     }else{
          console.log("acceso exitoso");
     }

}
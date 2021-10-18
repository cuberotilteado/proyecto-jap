//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

function cargarErrores(id, idMensaje) {
     var elementNombre = document.getElementById(id);
     var elementError = document.getElementById(idMensaje);
    if(elementNombre.value===''){
        elementError.style.display = "block";
        elementError.style.color = "red";
        elementNombre.classList.add("error");
        }else{
        elementError.style.display = "none";
        elementNombre.classList.remove("error");
    }
} 

function comprobarErrores(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    if(user.value === '' || pass.value === ''){
        cargarErrores('user', '1');
        cargarErrores('pass', '2');
    } else {
        sessionStorage.setItem ("name", document.getElementById("user").value)
        location.replace("index.html");
    }
}




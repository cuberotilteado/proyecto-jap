var product = {};
var comenatarios = [];

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function mostrarComentarios(array) {
    let html = "";
    for(let i = 0; i < array.length; i++){
        let datos = array[i];
        html += `<div class="card" style="width: 18rem;">
        <div class="card-header">
        `+ datos.user +`
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">`+ datos.description +`</li>
          <li class="list-group-item">`+ contarEstrellas(datos.score) +`</li>
          <li class="list-group-item">`+ datos.dateTime +`</li>
        </ul>
      </div>`
      document.getElementById("comentarios").innerHTML = html;
    }
}

function comentar(){
    var nombre = sessionStorage.getItem("name");
    var comments = document.getElementById('texto').value;
    let today = new Date();
    let fecha=+today.getFullYear()  + '-' +(today.getMonth()+1) + '-' + today.getDate()  ;
    let hora = today.getHours() + ':' + today.getMinutes() + ':'+today.getSeconds();
    let fechaHora = fecha + '      ' +hora;
    let htmlContentToAppend = "";
    let estrellas = document.getElementById("stars").value
    if(comments != "" && estrellas !== "Elige la cantidad de estrellas"){
        htmlContentToAppend += `<div class="card" style="width: 18rem;">
    <div class="card-header">
    `+ nombre +`
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">`+ comments +`</li>
      <li class="list-group-item">`+ contarEstrellas(estrellas) +`</li>
      <li class="list-group-item">`+ fechaHora +`</li>
    </ul>
  </div>`
    document.getElementById("comentarios").innerHTML += htmlContentToAppend;
    }
  }

function contarEstrellas(cantidad){
    var datosEstrellas = "";
    if(cantidad == 5){
        datosEstrellas = `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>`
        return datosEstrellas
    } else if(cantidad == 4){
        datosEstrellas = `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>`
        return datosEstrellas
    } else if(cantidad == 3){
        datosEstrellas = `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>`
        return datosEstrellas
    } else if(cantidad == 2){
        datosEstrellas = `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>`
        return datosEstrellas
    } else{
        datosEstrellas = `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>`
        return datosEstrellas
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost + product.currency;
            productCriteriaHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;}
            mostrarComentarios(comentarios);
        }); 
    });



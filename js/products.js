var productos = [];

function listado(productos) {

    let htmlContentToAppend = "";
    for (let i = 0; i < productos.length; i++) {
        let product = productos[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                <img src="` + product.imgSrc + `" alt="` + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + product.name + `</h4>
                       
                        <small class="text-muted"> `+ product.soldCount + ` artículos</small>
                    </div>
                    <p>` + product.description + `</p>
                </div>
             
            </div>
            <p>` + product.cost + product.currency + `</p>
        </div>`
        

        document.getElementById("artículos").innerHTML = htmlContentToAppend; 
    } //Función para hacer el listado

}

document.addEventListener("DOMContentLoaded", function(e) { //Agregué esta función para incluir el json al listado
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            productos = resultObj.data;
            listado(productos);
        }
    });
});
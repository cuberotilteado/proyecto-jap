var infoCarrito = [];

function agregarArticulo(array){
    let carrito = "";
    for (let i = 0; i < array.length; i++){
        var productos = array[i];

        carrito +=  `<tr>
        <th scope="row"><img src="`+ productos.src +`"></th>
        <td>`+ productos.name +`</td>
        <td> <input type="number" id="valor" onkeyup="cambiarCantidad(infoCarrito);" value="`+ productos.count +`"></input></td>
        <td>`+ productos.unitCost + productos.currency +`</td>
        <td><div id="total">`+ (productos.unitCost * productos.count) + productos.currency +`</div></td>
      </tr>` 
      document.getElementById("contenido").innerHTML = carrito
      document.getElementById("precioTotal").innerHTML = "Precio total: " + (productos.unitCost * productos.count) + productos.currency 
    }
}

function cambiarCantidad(array){
    var suma = document.getElementById("valor");
    for(let i = 0; i < array.length; i++){
        var precio = array[i].unitCost;
        var total = precio * suma.value
        console.log(total);
        document.getElementById("total").innerHTML = total + array[i].currency
        document.getElementById("precioTotal").innerHTML ="Precio total: " + total + array[i].currency
    }
 
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok") {
            infoCarrito = resultObj.data.articles
            agregarArticulo(infoCarrito);}
        }); 
    });
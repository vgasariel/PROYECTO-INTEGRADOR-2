const articulo = document.querySelector("article");

id = sessionStorage.getItem("id");

productos = JSON.parse(localStorage.getItem("productos"));

let productoElegido = productos.find(function(producto) {
    return producto.nombre == id;
});


articulo.innerHTML = (
        `<h2>${productoElegido.nombre}</h2>
        <p>${productoElegido.descripcion}</p>
        <img src=${productoElegido.imagen} alt=${productoElegido.descripcion}>
        <p>${productoElegido.desarrollo}</p>`            
);

if (productoElegido.talles) {
    articulo.innerHTML += `<p>Talles: ${productoElegido.talles}</p>`
}

articulo.innerHTML += `<p>$${productoElegido.precio}</p>`
        
let ul = document.createElement("ul");
ul.classList.add("calificacion");
for (i=0; i<5; i++){
    ul.innerHTML += (
    `<li class="bx bxs-star"></li>`
    )
}
articulo.appendChild(ul);

let estrellas = document.querySelectorAll("li");
for (i=0; i<productoElegido.puntuacion.length; i++) {
    estrellas[i].classList.add("marcado");
};

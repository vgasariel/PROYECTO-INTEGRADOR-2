const articulo = document.querySelector("article");

id = sessionStorage.getItem("id");

productos = JSON.parse(localStorage.getItem("productos"));
console.log(productos);


productos.forEach(producto => {
    if (producto.nombre == id) {
        articulo.innerHTML = (
            `<h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <img src=${producto.imagen} alt=${producto.descripcion}>
            <p>${producto.desarrollo}</p>
            <p>$${producto.precio}</p>`
        );

        let ul = document.createElement("ul");
        ul.classList.add("calificacion");
        for (i=0; i<5; i++){
            ul.innerHTML += (
                `<li class="bx bxs-star"></li>`
            )
        }
        articulo.appendChild(ul);

        let estrellas = document.querySelectorAll("li");
        for (i=0; i<producto.puntuacion.length; i++) {
            estrellas[i].classList.add("marcado");
        }
        }
    }
);

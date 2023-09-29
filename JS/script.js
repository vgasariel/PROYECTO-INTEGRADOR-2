const main = document.querySelector("main");
let productos;

const cargarProductos = async () => {
    productos = localStorage.getItem("productos");
    if (productos == null) {
      const response = await fetch("JS/productos.json");
        productos = await response.json()
        localStorage.setItem("productos", JSON.stringify(productos));
    } else if (typeof productos == "string") {
        productos = JSON.parse(productos);
    }   
}

cargarProductos().then( () => {
    productos.forEach(producto => {
    let item = document.createElement("div");
    item.classList.add("producto");
    item.innerHTML = (
        `<p>${producto.nombre}</p>
        <p>${producto.descripcion}</p>`
    )
    
    let boton = document.createElement("button");
    boton.classList.add("producto_boton", "bx", "bx-chevrons-right");
    boton.addEventListener("click", () => {
        sessionStorage.setItem("id", producto.nombre);
        window.location.href = "detalles.html";
    })

    item.appendChild(boton);
    main.appendChild(item);
    });
})




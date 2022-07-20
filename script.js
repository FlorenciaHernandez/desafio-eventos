

const productos = [
    {
        id: 1,
        nombre: "CUARZO ROSA",
        precio: 650,
        imagen: "images/cuarzo-rosa.jpg"
    },
    {
        id: 2,
        nombre: "AMATISTA",
        precio: 680,
        imagen: "images/amatista.jpg"
    },
    {
        id: 3,
        nombre: "CUARZO CRISTAL",
        precio: 630,
        imagen: "images/cuarzo-cristal.jpg"
    },
    {
        id: 4,
        nombre: "VELA DRAMA",
        precio: 580,
        imagen: "images/velas1.jpg"
    },
    {
        id: 5,
        nombre: "VELA ROSE",
        precio: 590,
        imagen: "images/velas2.jpg"
    },
    {
        id: 6,
        nombre: "VELA AWESOME",
        precio: 560,
        imagen: "images/velas3.jpg"
    },
]



const divProductos = document.getElementById("productos")
const input1 = document.getElementById("input1")
const boton = document.getElementById("boton")

let productosBuscados

//buscar productos
function filtrar(e) {
    e.preventDefault()
    divProductos.innerHTML = ''
    const texto = input1.value.toLowerCase()
    productosBuscados = productos.filter(producto => producto.nombre.toLowerCase() == texto)
    productosBuscados.forEach(producto => {
        divProductos.innerHTML += `
        <div id="productos" class="divPadre">
        <div class="card" style="width: 18rem; height: 25rem;">
        <img src="${producto.imagen}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title fw-light tituloProd">  ${producto.nombre} </h5>
        <p class="card-text text-center textoProd">$${producto.precio}</p>
        <p class="btn text-center btnProd"> VER PRODUCTO </p>
        </div>
        </div>
        </div>`
    });

    if (productosBuscados.length === 0) {
        divProductos.innerHTML += `
        Producto no encontrado`
    }
}


// volver a mostrar el catalogo de productos luego de la busqueda
function mostrar() {
    divProductos.innerHTML = ''
    if (input1.value === '') {
        productos.forEach(producto => {
            divProductos.innerHTML += `
            <div id="productos" class="divPadre">
            <div class="card" style="width: 18rem; height: 25rem;">
            <img src="${producto.imagen}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title fw-light tituloProd">  ${producto.nombre} </h5>
            <p class="card-text text-center textoProd">$${producto.precio}</p>
            <p class="btn text-center btnProd"> VER PRODUCTO </p>
            </div>
            </div>
            </div>`
        });
    } 
}


// mostrar catalogo de productos
productos.forEach(producto => {
    divProductos.innerHTML += `
    <div id="productos" class="divPadre">
    <div class="card" style="width: 18rem; height: 25rem;">
    <img src="${producto.imagen}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title fw-light tituloProd">  ${producto.nombre} </h5>
    <p class="card-text text-center textoProd">$${producto.precio}</p>
    <p class="btn text-center btnProd"> VER PRODUCTO </p>
    </div>
    </div>
    </div>`
});


boton.addEventListener("click", filtrar)
input1.addEventListener("keyup", mostrar)





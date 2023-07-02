const producto = [{
        id: "1",
        nombre: "The Last of Us Parte 1",
        precio: 25000,
        img: "./img/the-last-of-us-parte-i-202261012304123_1.avif",
        href: "./paginas/producto.html"
    },
    {
        id: "2",
        nombre: "Bleach Remix #1",
        precio: 25000,
        img: "./img/bleachremix011-db5742e66babce6afa16730621958737-640-0.webp",
        href: "./paginas/producto1.html"
    },
    {
        id: "3",
        nombre: "Batman The Killing Joke",
        precio: 25000,
        img: "./img/batman_broma_asesina_deluxe_pvc.avif",
        href: "./paginas/producto2.html",
    },
    {
        id: "4",
        nombre: "FIFA 23",
        precio: 25000,
        img: "./img/a6ztg-774xi.avif",
        href: "./paginas/producto3.html",
    },
    {
        id: "5",
        nombre: "Death Note #1",
        precio: 25000,
        img: "./img/a3ww7-n5hpx.avif",
        href: "./paginas/producto4.html",
    },
]

const caja = document.querySelector(".caja")
const btnSearch = document.querySelector("#btnSearch")
const inputIngreso = document.querySelector("#ingreso")
localStorage.setItem('products', JSON.stringify(producto))
const arrProd = JSON.parse(localStorage.getItem('products'))
const items = document.querySelector(".listaItems")
const carritoBtn = document.querySelectorAll(".carritoBtn")

function buscarProducto(arr, filtro) {
    const encontrado = arr.find((el) => {
        return el.nombre.includes(filtro)
    });
    return encontrado;
}

function crearHTML(el) {
    caja.innerHTML = "";
    let html = `<div class="divBusqueda">
                    <img src ="${el.img}" alt ="${el.nombre}" class ="imgJs"></img>
                    <h2 class ="textJs">${el.nombre}</h2>
                    <p class ="textJs">$${el.precio}</p>
                    <div class="divButton">
                        <a href= "${el.href}"> Ver producto </a>
                    </div>
                </div>`
    caja.innerHTML = html
}

function busqueda() {
    btnSearch.addEventListener("click", (e) => {
        e.preventDefault();
        const encontrar = buscarProducto(arrProd, inputIngreso.value)
        encontrar == undefined ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        }) + crearHTML() : crearHTML(encontrar)
    })
}

busqueda()
/*-----------------------*/

function nuevoHTML(el) {
    items.innerHTML = ""
    let html = `<ul class="dropdown-item ulJs">
                    <img src = ${el.img} class= "jsImg"></img>
                    <div class="jsDiv">
                        <div>
                            <a>${el.nombre}</a>
                            <a>$${el.precio}</a>
                        </div>
                    </div>
                </ul>`
    items.innerHTML = html
}

const comprar = carritoBtn[0].addEventListener("click", (e) => {
    e.preventDefault();
    nuevoHTML(arrProd[0])
    carritoBtn[1].addEventListener("click", (e) => {
        e.preventDefault();
        nuevoHTML(arrProd[1])
        carritoBtn[2].addEventListener("click", (e) => {
            e.preventDefault();
            nuevoHTML(arrProd[2])
        })
        carritoBtn[3].addEventListener("click", (e) => {
            e.preventDefault();
            nuevoHTML(arrProd[3])
        })
        carritoBtn[4].addEventListener("click", (e) => {
            e.preventDefault();
            nuevoHTML(arrProd[4])
        })
    })
})


const confirmar = document.querySelector(".btnConfirm")
confirmar.addEventListener("click", (e) => {
    Swal.fire({
        title: '¿Finalizar compra?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Compra realizada',
                'Sus productos llegarán en breve.',
                'success'
            )
        }
    })
})

const alerta = document.querySelector("#alerta");
const body = document.querySelector(".mainBody");

setTimeout(() => {
    alerta.classList.add('hide')
}, 10000)
alerta.classList.remove('hide')
class Producto {
    constructor(nombre, compañia, precio, stock) {
        this.nombre = nombre;
        this.compañia = compañia;
        this.precio = precio;
        this.stock = stock;
    }
    vender = (cantidad) => {
        this.stock = this.stock - cantidad;
    }
    mostrar = () => "Producto: " + this.nombre + " Marca: " + this.compañia + " Precio: " + this.precio + " Stock: " + this.stock;
}

const comic1 = new Producto("Avengers #1", "Marvel Comics", 45000, 5);
const comic2 = new Producto("The New 52 Justice League #1", "DC Comics", 5500, 35);
const comic3 = new Producto("The Amazing Spider-Man #1", "Marvel Comics", 5500, 35);
const comic4 = new Producto("TMNT #1", "IDW", 5500, 35);
const comic5 = new Producto("Batman The Killing Joke", "DC Comics", 7000, 20);

const manga1 = new Producto("Death Note #10", "IVREA", 1800, 23);
const manga2 = new Producto("BLEACH Remix #1", "IVREA", 4900, 10);
const manga3 = new Producto("One Piece #1", "JUMP Comics", 1800, 20);
const manga4 = new Producto("Chainsaw-Man #1", "JUMP Comics", 1800, 15);
const manga5 = new Producto("Vinland Saga #1", "Planeta Dragostini", 1800, 20);

const videojuego1 = new Producto("Elden Ring PS5", "From Software", 25000, 15);
const videojuego2 = new Producto("God of War Ragnarok PS5", "Santa Monica Studios", 25000, 15);
const videojuego3 = new Producto("Horizon Forbidden West PS4", "Guerrilla Studios", 18000, 20);
const videojuego4 = new Producto("The Last of Us Parte 1 PS5", "Naughty Dog", 25000, 15);
const videojuego5 = new Producto("FIFA 23 PS4", "EA Sports", 18000, 25);

const carta1 = new Producto("Magic The Gathering", "Wizards of the Coast", 15000, 15);
const carta2 = new Producto("YUGIOH Eternity Code", "Konami", 15000, 15);
const carta3 = new Producto("Pokemon Card Game", "Hasbro", 15000, 15);

const biblioteca = [
    comic1,
    comic2,
    comic3,
    comic4,
    comic5,
]

const mangas = [
    comic1,
    comic2,
    comic3,
    comic4,
    comic5,
]

const videojuegos = [
    videojuego1,
    videojuego2,
    videojuego3,
    videojuego4,
    videojuego5,
]

const cartas = [
    carta1,
    carta2,
    carta3,
]

const productos = biblioteca.concat(mangas, videojuegos, cartas)


function info(item) {
    if (item == "avengers") {
        console.log("Elegiste " + comic1.nombre + " $" + comic1.precio);
    } else if (item == "justice league") {
        console.log("Elegiste " + comic2.nombre + " $" + comic2.precio);
    } else if (item == "spiderman") {
        console.log("Elegiste " + comic3.nombre + " $" + comic3.precio);
    } else if (item == "tmnt") {
        console.log("Elegiste " + comic4.nombre + " $" + comic4.precio);
    } else if (item == "batman") {
        console.log("Elegiste " + comic5.nombre + " $" + comic5.precio);
    } else if (item == "death note") {
        console.log("Elegiste " + manga1.nombre + " $" + manga1.precio);
    } else if (item == "bleach") {
        console.log("Elegiste " + manga2.nombre + " $" + manga2.precio);
    } else if (item == "one piece") {
        console.log("Elegiste " + manga3.nombre + " $" + manga3.precio);
    } else if (item == "chainsaw man") {
        console.log("Elegiste " + manga4.nombre + " $" + manga4.precio);
    } else if (item == "vinland saga") {
        console.log("Elegiste " + manga5.nombre + " $" + manga5.precio);
    } else if (item == "elden ring") {
        console.log("Elegiste " + videojuego1.nombre + " $" + videojuego1.precio);
    } else if (item == "god of war") {
        console.log("Elegiste " + videojuego2.nombre + " $" + videojuego2.precio);
    } else if (item == "horizon") {
        console.log("Elegiste " + videojuego3.nombre + " $" + videojuego3.precio);
    } else if (item == "tlou") {
        console.log("Elegiste " + videojuego4.nombre + " $" + videojuego4.precio);
    } else if (item == "fifa") {
        console.log("Elegiste " + videojuego5.nombre + " $" + videojuego5.precio);
    } else if (item == "magic") {
        console.log("Elegiste " + carta1.nombre + " $" + carta1.precio);
    } else if (item == "yugioh") {
        console.log("Elegiste " + carta2.nombre + " $" + carta2.precio);
    } else if (item == "pokemon") {
        console.log("Elegiste " + carta3.nombre + " $" + carta3.precio);
    }
}

function shop(op) {
    let opcion = prompt("Ingrese una categoría. Para cancelar compra, pulse 0. Para ver información sobre los productos, pulse 10.\n1- Comics\n2- Mangas\n3- videojuego\n4- Juegos de Cartas");
    switch (opcion) {
        case "1":
        case "comic":
        case "comics":
        case "Comic":
        case "Comics":
            let opcionComics = prompt("Elegir producto para ingresar al carrito. Para cancelar compra, pulse 0.\n1- Avengers #1 - $45000\n2- The New 52 Justice League #1 - $5500\n3- The Amazing Spider-Man #1 - $5500\n4- TMNT #1 - $5500\n5- Batman The Killing Joke - $7000");
            switch (opcionComics) {
                case "1":
                case "avenger":
                case "avengers":
                case "Avengers":
                    info("avengers")
                    comic1.vender(1)
                    break;
                case "2":
                case "justice league":
                case "liga de la justicia":
                case "The New 52 Justice League":
                    info("justice league")
                    comic2.vender(1)
                    break;
                case "3":
                case "spiderman":
                case "Spiderman":
                case "spider-man":
                case "amazing spiderman":
                case "amazing":
                    info("spiderman")
                    comic3.vender(1)
                    break;
                case "4":
                case "tmnt":
                case "TMNT":
                    info("tmnt")
                    comic4.vender(1)
                    break;
                case "5":
                case "batman":
                case "Batman":
                case "BATMAN":
                case "Batman The Killing Joke":
                    info("batman")
                    comic5.vender(1)
                    break;
                case "0":
                case 0:
                    console.log("Compra cancelada");
                    break
                default:
                    console.log("Opcion no valida");
                    break;
            }
            break;
        case "2":
        case "manga":
        case "mangas":
        case "Manga":
        case "Mangas":
            let opcionManga = prompt("Elegir producto para ingresar al carrito. Para cancelar compra, pulse 0.\n1- Death Note #10 - $1800\n2- BLEACH Remix #1 - $4900\n3- One Piece #1 - $1800\n4- Chainsaw-Man #1 - $1800\n5- Vinland Saga #1 - $1800");
            switch (opcionManga) {
                case "1":
                case "death":
                case "death note":
                case "Death":
                case "Death note":
                case "Death Note":
                    info("death note")
                    manga1.vender(1)
                    break;
                case "2":
                case "bleach":
                case "Bleach":
                case "BLEACH":
                case "bleach remix":
                    info("bleach")
                    manga2.vender(1)
                    break;
                case "3":
                case "one piece":
                case "one":
                case "One piece":
                case "One Piece":
                    info("one piece")
                    manga3.vender(1)
                    break;
                case "4":
                case "chainsaw":
                case "chainsawman":
                case "chainsaw-man":
                case "Chainsawman":
                    info("chainsaw man")
                    manga4.vender(1)
                    break;
                case "5":
                case "vinland":
                case "vinland saga":
                case "Vinland Saga":
                    info("vinland saga")
                    manga5.vender(1)
                    break;
                case "0":
                case 0:
                    console.log("Compra cancelada");
                    break;
                default:
                    console.log("Opción no válida");
                    break;
            }
            break;
        case "3":
        case "videojuego":
        case "videojuego":
        case "Videojuego":
        case "videojuego":
            let opcionvideojuego = prompt("Elegir producto para ingresar al carrito. Para cancelar compra, pulse 0.\n1- Elden Ring PS5 - $25000\n2- God of War Ragnarok PS5 - $25000\n3- Horizon Forbidden West PS4- $18000\n4- The Last of Us Parte 1 PS5 - $25000\n5- FIFA 23 PS4- $18000");
            switch (opcionvideojuego) {
                case "1":
                case "elden":
                case "elden ring":
                case "Elden":
                case "Elden ring":
                case "Elden Ring":
                    info("elden ring")
                    videojuego1.vender(1)
                    break;
                case "2":
                case "god of war":
                case "god":
                case "god of war ragnarok":
                case "God of war":
                case "God of war ragnarok":
                    info("god of war")
                    videojuego2.vender(1)
                    break;
                case "3":
                case "horizon":
                case "Horizon":
                case "horizon forbidden west":
                    info("horizon")
                    videojuego3.vender(1)
                    break;
                case "4":
                case "the last of us":
                case "The last of us":
                case "The last of us parte 1":
                    info("tlou")
                    videojuego4.vender(1)
                    break;
                case "5":
                case "fifa":
                case "Fifa":
                case "FIFA":
                case "fifa 23":
                    info("fifa")
                    videojuego5.vender(1)
                    break;
                case "0":
                case 0:
                    console.log("Compra cancelada");
                    break;
                default:
                    console.log("Opción no válida");
                    break;
            }
            break;
        case "4":
        case "carta":
        case "Carta":
        case "Cartas":
        case "cartas":
        case "juego":
        case "juegos":
        case "juego de cartas":
            let opcionCartas = prompt("Elegir producto a comprar. Para cancelar compra, pulse 0.\n1- Magic The Gathering - $15000\n2- YUGIOH Eternity Code - $15000\n3- Pokemon Card Game - $15000");
            switch (opcionCartas) {
                case "1":
                case "magic":
                case "magic the gathering":
                case "Magic":
                case "Magic the gathering":
                    info("magic")
                    carta1.vender(1)
                    break;
                case "2":
                case "yugioh":
                case "Yugioh":
                case "YUGIOH":
                    info("yugioh")
                    carta2.vender(1)
                    break;
                case "3":
                case "pokemon":
                case "Pokemon":
                case "pokemon card game":
                case "Pokemon card game":
                    info("pokemon")
                    carta3.vender(1)
                    break;
                case "0":
                case 0:
                    console.log("Compra cancelada");
                    break
                default:
                    console.log("Opción no valida");
                    break;
            }
            break;
        case "10":
            let mensaje = prompt("Escoga que información desea ver de los productos \n1- Nombre\n2- Compañías\n3- Precios\n4- Stock")
            switch (mensaje) {
                case "1":
                    for (const valor of productos) {
                        console.log("Nombres:" + valor.nombre);
                    }
                    break;
                case "2":
                    for (const valor of productos) {
                        console.log("Compañía " + valor.nombre + ": " + valor.compañia);
                    }
                    break;
                case "3":
                    for (const valor of productos) {
                        console.log("Precio " + valor.nombre + ": " + valor.precio);
                    }
                    break;
                case "4":
                    for (const valor of productos) {
                        console.log("Stock " + valor.nombre + ": " + valor.stock + "unidades");
                    }
                    break;
                default:
                    console.log("Opción no válida");
                    break;
            }
            break;
        default:
            console.log("Opción no valida");
            break;
    }
}


let tienda = shop()


while (tienda !== "0") {
    let mensaje = prompt("Dese agregar otro producto a la lista? Para volver a ver los productos, presione 1. Si desea comprar los productos seleccionados, presione 2. Si desea cancelar la compra, pulse 0.");
    if (mensaje == "1") {
        shop()
    } else if (mensaje == "2") {
        console.log("Gracias por comprar");
        break;
    } else if (mensaje == "0") {
        console.log("Compra cancelada");
        break;
    } else {
        alert("Opción inválida");
    }
}




/*
funciones
variables
bucles
switch
objetos
arrays
math
*/
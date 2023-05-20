let avPrecio = 45000;
let jlSpiderAndTmnt = 5500;
let btmnPrecio = 7000;
let DnCsmVsAndOp = 1800;
let bleachPrecio = 4900;
let ErGowAndTlou = 25000
let HfwAndFifa = 18000
let cartaPrecio = 15000

function shop() {
    let opcion = prompt("Ingrese una categoría. Para cancelar compra, pulse 0.\n1- Comics\n2- Mangas\n3- Videojuegos\n4- Juegos de Cartas");
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
                    console.log("Elegiste Avengers #1 $" + avPrecio);
                    break;
                case "2":
                case "justice league":
                case "liga de la justicia":
                case "The New 52 Justice League":
                    console.log("Elegiste The New 52 Justice League #1 $" + jlSpiderAndTmnt);
                    break;
                case "3":
                case "spiderman":
                case "Spiderman":
                case "spider-man":
                case "amazing spiderman":
                case "amazing":
                    console.log("Elegiste The Amazing Spider-Man #1 $" + jlSpiderAndTmnt);
                    break;
                case "4":
                case "tmnt":
                case "TMNT":
                    console.log("Elegiste TMNT #1 $" + jlSpiderAndTmnt);
                    break;
                case "5":
                case "batman":
                case "Batman":
                case "BATMAN":
                case "Batman The Killing Joke":
                    console.log("Elegiste Batman The Killing Joke $" + btmnPrecio);
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
                    console.log("Elegiste Death Note #10 $" + DnCsmVsAndOp);
                    break
                case "2":
                case "bleach":
                case "Bleach":
                case "BLEACH":
                case "bleach remix":
                    console.log("Elegiste BLEACH Remix #1 $" + bleachPrecio);
                    break
                case "3":
                case "one piece":
                case "one":
                case "One piece":
                case "One Piece":
                    console.log("Elegiste One Piece #1 $" + DnCsmVsAndOp);
                    break
                case "4":
                case "chainsaw":
                case "chainsawman":
                case "chainsaw-man":
                case "Chainsawman":
                    console.log("Elegiste Chainsaw-Man #1 $" + DnCsmVsAndOp);
                    break
                case "5":
                case "vinland":
                case "vinland saga":
                case "Vinland Saga":
                    console.log("Elegiste Vinland Saga #1 $" + DnCsmVsAndOp);
                    break;
                case "0":
                case 0:
                    console.log("Compra cancelada");
                    break
                default:
                    console.log("Opción no válida");
                    break
            }
            break;
        case "3":
        case "videojuego":
        case "videojuegos":
        case "Videojuego":
        case "Videojuegos":
            let opcionVideojuegos = prompt("Elegir producto para ingresar al carrito. Para cancelar compra, pulse 0.\n1- Elden Ring PS5 - $25000\n2- God of War Ragnarok PS5 - $25000\n3- Horizon Forbidden West PS4- $18000\n4- The Last of Us Parte 1 PS5 - $25000\n5- FIFA 23 PS4- $18000");
            switch (opcionVideojuegos) {
                case "1":
                case "elden":
                case "elden ring":
                case "Elden":
                case "Elden ring":
                case "Elden Ring":
                    console.log("Elegiste Elden Ring PS5 $" + ErGowAndTlou);
                    break
                case "2":
                case "god of war":
                case "god":
                case "god of war ragnarok":
                case "God of war":
                case "God of war ragnarok":
                    console.log("Elegiste God of War Ragnarok PS5 $" + ErGowAndTlou);
                    break
                case "3":
                case "horizon":
                case "Horizon":
                case "horizon forbidden west":
                    console.log("Elegiste Horizon Forbidden West PS4 $" + HfwAndFifa);
                    break
                case "4":
                case "the last of us":
                case "The last of us":
                case "The last of us parte 1":
                    console.log("Elegiste The Last of Us Parte 1 PS5 $" + ErGowAndTlou);
                    break
                case "5":
                case "fifa":
                case "Fifa":
                case "FIFA":
                case "fifa 23":
                    console.log("Elegiste FIFA 23 PS4 $" + HfwAndFifa);
                    break;
                case "0":
                case 0:
                    console.log("Compra cancelada");
                    break
                default:
                    console.log("Opción no válida");
                    break
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
                    console.log("Elegiste Magic The Gathering $" + cartaPrecio);
                    break;
                case "2":
                case "yugioh":
                case "Yugioh":
                case "YUGIOH":
                    console.log("Elegiste YUGIOH Eternity Code $" + cartaPrecio);
                    break;
                case "3":
                case "pokemon":
                case "Pokemon":
                case "pokemon card game":
                case "Pokemon card game":
                    console.log("Elegiste Pokemon Card Game $" + cartaPrecio);
                    break;
                case "0":
                case 0:
                    console.log("Compra cancelada");
                    break
                default:
                    console.log("Opción no valida");
                    break;
            }
            break
        default:
            console.log("Opción no valida");
            break;
    }
}

let tienda = shop()

while (tienda != "0") {
    let mensaje = prompt("Dese agregar otro producto a la lista? Para volver a ver los productos, presione 1. Si desea comprar los productos seleccionados, presione 2. Si desea cancelar la compra, pulse 0.");
    if (mensaje == "1") {
        shop()
    } else if (mensaje == "2"){
        console.log("Gracias por comprar");
        break;
    } else if (mensaje == "0"){
        console.log("Compra cancelada");
        break;
    }else{
        alert("Opción inválida");
    }
}

function shop() {
    let opcion= prompt("Ingrese una categoría. Para cancelar compra, pulse 0.\n1- Comics\n2- Mangas\n3- Videojuegos\n4- Juegos de Cartas");
    switch (opcion) {
        case "1":
        case "comic":
        case "comics":
        case "Comic":
        case "Comics":
            let opcionComics=prompt("Elegir producto a comprar. Para cancelar compra, pulse 0.\n1- Avengers #1 - $45000\n2- The New 52 Justice League #1 - $5500\n3- The Amazing Spider-Man #1 - $5500\n4- TMNT #1 - $5500\n5- Batman The Killing Joke - $7000");
            switch (opcionComics) {
                case "1":
                case "avenger":
                case "avengers":
                case "Avengers":
                    console.log("Elegiste Avengers #1");
                    break;
                case "2":
                case "justice league":
                case "liga de la justicia":
                case "The New 52 Justice League":
                    console.log("Elegiste The New 52 Justice League #1");
                    break;
                case "3":
                case "spiderman":
                case "Spiderman":
                case "spider-man":
                case "amazing spiderman":
                case "amazing":
                    console.log("Elegiste The Amazing Spider-Man #1");
                    break;
                case "4":
                case "tmnt":
                case "TMNT":
                    console.log("Elegiste TMNT #1");
                    break;
                case "5":
                case "batman":
                case "Batman":
                case "BATMAN":
                case "Batman The Killing Joke":
                    console.log("Elegiste Batman The Killing Joke");
                    break;
                case"0":
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
            let opcionManga = prompt("Elegir producto a comprar. Para cancelar compra, pulse 0.\n1- Death Note #10 - $1800\n2- BLEACH Remix #1 - $4900\n3- One Piece #1 - $1800\n4- Chainsaw-Man #1 - $1800\n5- Vinland Saga #1 - $1800");
            switch (opcionManga) {
                case "1":
                case "death":
                case "death note":
                case "Death":
                case "Death note":
                case "Death Note":
                    console.log("Elegiste Death Note #10");
                    break
                case "2":
                case "bleach":
                case "Bleach":
                case "BLEACH":
                case "bleach remix":
                    console.log("Elegiste BLEACH Remix #1");
                    break
                case "3":
                case "one piece":
                case "one":
                case "One piece":
                case "One Piece":
                    console.log("Elegiste One Piece #1");
                    break
                case "4":
                case "chainsaw":
                case "chainsawman":
                case "chainsaw-man":
                case "Chainsawman":
                    console.log("Elegiste Chainsaw-Man #1");
                    break
                case "5":
                case "vinland":
                case "vinland saga":
                case "Vinland Saga":
                    console.log("Elegiste Vinland Saga #1");
                    break;
                case"0":
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
            let opcionVideojuegos = prompt("Elegir producto a comprar. Para cancelar compra, pulse 0.\n1- Elden Ring PS5 - $25000\n2- God of War Ragnarok PS5 - $25000\n3- Horizon Forbidden West PS4- $18000\n4- The Last of Us Parte 1 PS5 - $25000\n5- FIFA 23 PS4- $18000");
            switch (opcionVideojuegos) {
                case "1":
                case "elden":
                case "elden ring":
                case "Elden":
                case "Elden ring":
                case "Elden Ring":
                    console.log("Elegiste Elden Ring PS5");
                    break
                case "2":
                case "god of war":
                case "god":
                case "god of war ragnarok":
                case "God of war":
                case "God of war ragnarok":
                    console.log("Elegiste God of War Ragnarok PS5");
                    break
                case "3":
                case "horizon":
                case "Horizon":
                case "horizon forbidden west":
                    console.log("Elegiste Horizon Forbidden West PS4");
                    break
                case "4":
                case "the last of us":
                case "The last of us":
                case "The last of us parte 1":
                    console.log("Elegiste The Last of Us Parte 1 PS5");
                    break
                case "5":
                case "fifa":
                case "Fifa":
                case "FIFA":
                case "fifa 23":
                    console.log("Elegiste FIFA 23 PS4");
                    break;
                case"0":
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
        case"juego":
        case"juegos":
        case"juego de cartas":
            let opcionCartas = prompt("Elegir producto a comprar. Para cancelar compra, pulse 0.\n1- Magic The Gathering - $15000\n2- YUGIOH Eternity Code - $15000\n3- Pokemon Card Game - $15000");
            switch (opcionCartas) {
                case "1":
                case "magic":
                case "magic the gathering":
                case "Magic":
                case "Magic the gathering":
                    console.log("Elegiste Magic The Gathering");
                    break
                case "2":
                case "yugioh":
                case "Yugioh":
                case "YUGIOH":
                    console.log("Elegiste YUGIOH Eternity Code");
                    break
                case "3":
                case "pokemon":
                case "Pokemon":
                case "pokemon card game":
                case "Pokemon card game":
                    console.log("Elegiste Pokemon Card Game");
                    break
                case"0":
                    console.log("Compra cancelada");
                    break
                default:
                    console.log("Opción no valida");
                    break;
            }
            break
        case "0":
            console.log("Compra cancelada");
            break
        default:
            console.log("Opción no válida");
            break
        }
}

shop();
if (shop != 0) {
    shop();
}else{
    console.log("Compra cancelada");
}


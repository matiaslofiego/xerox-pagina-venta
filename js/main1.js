/*
== Es igual
=== Es estrictamente igual
!= Es distinto
!== Es estrictamete diferente
<,<=,>,>=Menor, menor o igual, myor, mayor o igual
&& Operador and (y)
||Operador or (o)
! Operador not (no)
*/
/*
let apellido;
let edad;
let direccion;
apellido="Perez"; //string
edad=30; //number
direccion= "Bolivia 123";

let dia= "Lunes";
let nombre= "Matias";
apellido= "Ais";

const PI=3.14; //constantes
const IVA =21;
const GRAVEDAD =9.8;

let resultado= PI + 4;
let gravedadXiva= GRAVEDAD * IVA;
let nombreCompleto= nombre + apellido;  //concatenación de variables

console.log("Buenos dias mandy");
console.log("El resultado de la suma entre "+ PI +" y "+ 4 +" es " + resultado );
console.log(PI);
console.log(resultado);
console.log(gravedadXiva);
console.log(nombreCompleto);

let nombre1 = prompt ("Escribe tu nombre");
alert("Hola" + nombre1 + "Bienvenido/a al sitio.");

let num1 = prompt("Ingresá un número");  //Prompt: Cuadro para escribir
let num2 = parseFloat(prompt("Ingresá un número"));//conversión en la misma línea
num1 = Number(num1); // conversión en direfente línea

let suma = num1 + num2
console.log("El resultado de la suma es:" + suma);
alert(suma);

let numero1 = 15
if(numero1 == 15){
    console.log("Es igual");
} else{
    console.log("No es igual");
}

let ingreso = prompt("Ingresá tu nombre")
if (ingreso == ""){
    console.log("Los campos no pueden estar vacios");
}else{
    console.log("Hola"+ " " + ingreso +". " + "Bienvenido/a al sitio.");
}

let temp = 35;
if (temp<20){
    console.log("La temperatura es menor a 20 grados");
}else if(temp==20){
    console.log("La temperatura es igual a 20 grados");
}else if(temp<40){
    console.log("La temperatura es menor a 40 grados");
}else{
    console.log("La temperatura es menor o igual a 100");
}

let edad1=18
if (edad1>=18){
    console.log("Podes entrar al casino.");
}else{
    console.log("No podes entrar al casino.");
}

let user1 = prompt("Ingresá tu usuario");
let pass = prompt ("Ingresá tu contraseña");
if (user1 === "Matias" && pass === 'peregrino'){
    console.log("Bienvenido Matias");
}else{
    console.log("Error");
}

//bucle for
for(let i=0;i<3;i=i+1){
    alert ("Ya llegamos?")
    alert("No")
}
alert("Ahora si")

let palabraClave="menta"
for(let i=1; i<=3;i++){
    let ingreso=prompt("Ingresa la palabra clave")
    if(ingreso==palabraClave){
        console.log("Adivinaste");
        break;
    }
    else{
        console.log("Muchos intentos fallidos. Burro.");    
    }
}

//continue
for (let i = 0; i <= 10; i++){
    if (i % 2 != 0) {
        console.log("Impar");
        continue;
    }
    console.log(i);
}

//while
let i = 0;
while (i < 10){
    console.log (i);
    //condición de salida
    i++;
}

let pregunta= prompt("Ya llegamos?");
while (pregunta != "si"){
    pregunta= prompt("Ya llegamos?");
}
console.log("Piola");

let producto=prompt("Ingresa un producto. Para salir, pulsa 0.")
while(producto != "0"){
    console.log("Ingresaste el producto: " + producto);
    producto=prompt("Ingresa otro producto. Para salir, pulsa 0.")
}
console.log("Gracias por su compra");

//do while
let producto1=prompt("Ingresa un producto. Para salir, pulsa 0.")
do {
    alert("Ingresaste el producto: " + producto1);
    producto1=prompt("Ingresa un producto. Para salir, pulsa 0.")
} while (producto1 != "0");
alert("Gracias por su compra")

//switch
let opcion = prompt("Ingrese una opción\n1-Café\n2-Té\n3-Chocolate\n4-Agua");
if (opcion == "1") {
    console.log("Seleccionaste Café");
} else if (opcion == "2") {
    console.log("Seleccionaste Té");
} else if (opcion == "3") {
    console.log("Seleccionaste Chocolate");
} else if (opcion == "4") {
    console.log("Seleccionaste Agua");
} else {
    console.log("Opción no valida.");
}


//funciones



function saludar() {
    console.log("Buenos dias");
}
for (let i = 0; i < 3; i++) {
    saludar()
}

function saludarConParametros(nombre){//parametro
    console.log("Buen dia, " + nombre + ". Bienvenido/a al sitio.");
}
let usuario = prompt("Ingresa tu nombre");
saludarConParametros("Matias")//argumento
saludarConParametros(usuario)

let usuario1 = prompt("Ingresá tu nombre")
let momento = prompt("Ingresá el momento del día")
function nombreMomento(nombre, momento) {
    console.log("Hola " + nombre + ", bueno/as " + momento + "s");
}
nombreMomento("Matias", "día")
nombreMomento(usuario1, momento)

let resultado1=0;
console.log(resultado1);
function sumar(n1, n2) {
    resultado1 = n1 + n2;
}
function mostrar(mensaje) {
    console.log(mensaje);
}
sumar(12, 6)
mostrar(resultado1)



//return


function suma1(n1, n2) {
    return n1 + n2
}
let resultado2 = suma1(4, 5)
let resultado3 = suma1(34, 8)
console.log(resultado2);
console.log(resultado3);
let resultado4 = (resultado2 + resultado3)
console.log(resultado4);

function calcular(n1, n2, op) {
    switch (op) {
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "*":
            return n1 * n2
        case "/":
            return n1 / n2
        default:
            return "Opción no valida"
    }
}
let sumar1= calcular(33, 29, "+")
console.log(sumar1);
let resta= calcular(33, 29, "-")
console.log(resta);
let multi= calcular(33, 29, "*")
console.log(multi);
let div= calcular(33, 29, "/")
console.log(div);
let error= calcular(22, 44, "o")
console.log(error);



//scope o ambito


let nombre2="Dani"
console.log(nombre2);

if (true) {
    let nombre2="Juan"
    console.log(nombre2);
}
console.log(nombre2);

function cambiarNombre(param) {
    let nombre2=param;
    return nombre2
}
console.log(cambiarNombre("Pepe")); 
console.log(cambiarNombre("Pedro")); 

//funcion flecha


const cambiarNombre1= (param) => param;//return implicito
console.log(cambiarNombre1("Mati"));
console.log(cambiarNombre1("Emi"));



//objetos


let nombre = "Matias"
let tel = "121433445"
let direc = "Bolivia 123"

let nombre1 = "Gordo"
let tel1 = "84332487"

const contacto={
    nombre: "Matias",
    tel: "345345",
    direccion: "Bolivia 123,"
};
console.log(contacto["nombre"]);

const contacto1={
    nombre: "Matias",
    tel: "345345",
    direccion: "Bolivia 123,"
};
console.log(contacto1.tel);
console.table(contacto1)

contacto["email"] = "momo@gmail.com"
contacto.tel = "421313213"
console.log(contacto);

//metodos
let mensaje = "Mamahuevo";
function saludar(nombre) {
    console.log(nombre);
}
saludar("Arturo")

console.log(mensaje.length);
console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase());



//funcion constructora


function Producto(nombre, marca, precio, stock) {
    this.nombre_producto = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
    this.vender = (cantidad) => {
        this.stock = this.stock - cantidad;
    }
    this.mostrar = () => "Producto: " + this.nombre_producto + " Marca: " + this.marca + " Precio: " + this.precio + " Stock: " + this.stock;
}



//clase constructura


class Producto{
    constructor(nombre, marca, precio, stock){
        this.nombre_producto = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
    vender = (cantidad) => {
        this.stock = this.stock - cantidad;
    }
    mostrar = () => "Producto: " + this.nombre_producto + " Marca: " + this.marca + " Precio: " + this.precio + " Stock: " + this.stock;
}

const producto1 = new Producto("arroz", "gallos", 450, 20); //instanciar un producto
const producto2 = new Producto("fideos", "luchetti", 380, 35);

console.log(producto1.nombre_producto);
console.log(producto1.precio);
console.log(producto2);

console.log(producto1.stock);
producto1.vender(5);
producto1.vender(5);
producto1.vender(5);
producto1.vender(5);
producto1.vender(5);
console.log(producto1.stock);
console.log(producto1.mostrar());



//operador in


console.log("nombre_producto" in producto1);
console.log(producto1.nombre_producto);
console.log("tel" in producto1)
console.log("nombre_producto" in producto2);;

//bucle for in
for (const prop in producto1) {
    console.log(prop + ": " + producto1[prop]);
}



//array


const array= [1,2,3,4,5,6,7,78,];
const nombres=["Juan", "Seba", "Iara", "German"];
const booleanos=[true, false, false, true];

console.log(array);
console.log(nombres);
console.log(booleanos);
console.log(nombres[0]);
array[3]="azucar";

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}



//metodos array

//agregar elementos al final del array
console.log(nombres);
nombres.push("Juan Esteban")
console.log(nombres);
//unshift (agregar elementos al principio del array)
nombres.unshift("Noelia")
console.log(nombres);
//pop (quitar elementos del final)
nombres.pop();
console.log(nombres);
//shift (quitar elementos del inicio)
nombres.shift();
console.log(nombres);
//splice (quitar elementos en el medio)
nombres.splice(2,1)
console.log(nombres);
//concat (unir arrays)
const conjunto = nombres.concat(booleanos)
console.log(conjunto);
//slice (copia una porcion del array)
const tajada = nombres.slice(1,3)
console.log(tajada);
//indexOf
console.log(nombres.indexOf("German"));
console.log(nombres.indexOf("Mario"));
//includes
console.log(nombres.includes("German"));
console.log(nombres.includes("Mario"));



//arrays objetos


const libro = {
    nombre: "Harry Potter",
    autor: "JKR",
    precio: 7000,
    stock: 30,
};

function Libro (nombre, autor, precio, stock) {
    this.nombre = nombre;
    this.autor = autor;
    this.precio = precio;
    this.stock = stock;
}
const libro1 = new Libro("El cuervo", "Edgar Allan Poe", 10000, 35);

const libreria = [
    libro,
    {
        nombre: "Steve Jobs",
        autor: "Walter Isaacson",
        precio: 15000,
        stock: 10,
    }
];

libreria.push(libro1)
console.log(libreria);
//recorrer array de objetos for of
for (const libro of libreria) {
    console.log(libro);
    console.log(libro.nombre);
    console.log(libro.autor);
    console.log(libro.precio);
    console.log(libro.stock);
}

const listaDeDeseos = [];

console.log(listaDeDeseos);

let limite = 2;
do {
    let nombre = prompt ("Ingresá nombre de libro")
    let autor = prompt ("Ingresá nombre de autor")
    let precio = prompt ("Ingresá precio de libro")
    let cant = prompt ("Ingresá cantidad de libros")
    listaDeDeseos.push(new Libro(nombre, autor, precio, cant))
} while (listaDeDeseos.length != limite);


//al pasarlo a funcion:

function pedirLibros(arr, limit){
    do {
        let nombre = prompt ("Ingresá nombre de libro");
        let autor = prompt ("Ingresá nombre de autor");
        let precio = prompt ("Ingresá precio de libro");
        let cant = prompt ("Ingresá cantidad de libros");
        arr.push(new Libro(nombre, autor, precio, cant));
    } while (arr.length != limit);
}

pedirLibros(listaDeDeseos, limite);

console.log(listaDeDeseos);
for (const libro of listaDeDeseos) {
    console.log(libro.nombre);
    console.log(libro.autor);
    console.log(libro.precio);
    console.log(libro.stock);
}



//metodo tradicional
let total = 0;
for (let i = 1; i <= 10; i++) {
    total = total + i;
}
console.log(total);

//abstracción
function sumarRango(inicio, fin) {
    let total = 0;
    for (let i = inicio; i <= fin; i++) {
        total = total + i;
    }
    return total;
}
let rango = sumarRango(1,10)
console.log(rango);

//retornar funciones
function mayorQue(n) {
    return (m) => m>n
}

let mayorQueDiez = mayorQue(10)
console.log(mayorQueDiez(12));
console.log(mayorQueDiez(8));
*/

function asignarOperacion(op) {
    switch (op) {
        case "+":
            return (a, b) => a + b;
    case "-":
        return (a, b) => a - b;
        default:
            ()=> "Operador no válido"
    }
}

let suma = asignarOperacion ("+");
console.log(suma(1,2));
console.log(suma(3, 234));

let resta = asignarOperacion("-")
console.log(resta(23, 4));

//funciones por parámetro

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function porCadaUno(arr, fn) {
    for (const elemento of arr) {
        fn (elemento);
    }
}

//porCadaUno(nums, alert)
porCadaUno(nums, console.log)

let triplicado =[]
console.log(nums);
console.log(triplicado);

porCadaUno(nums, (el)=> {
    triplicado.push(el*3)
})
console.log(triplicado);

const triplicar =function (el){
    triplicado.push(el*3);
}
porCadaUno(nums, triplicar)

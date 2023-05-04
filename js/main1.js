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

/*
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

let arcoiris = true
let caida = false

if(true){
    console.log("Buenas");
}
if(false){
    console.log("Mamen");
}

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
*/

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

/*
let user = prompt("Ingresá tu usuario");
if (user === "Matias"){
    let pass = prompt ("Ingresá tu contraseña");
    if (pass==="peregrino"){
        console.log("Bienvenido Matias");
    }else{
        console.log("Error");
    }
}else{
    console.log("Te vas a ir baneado");
}


let user = prompt("Ingresá tu usuario");
let pass = prompt ("Ingresá tu contraseña");
if (user === "Matias" && pass === 'peregrino'){
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

let ingreso = parseInt(prompt("Ingresá un número para multiplicar")):
let limite = parseInt(prompt("Ingresá hasta que número queres multiplicar"));
for (let i = 0; i = limite; i++){
    let resultado = ingreso * i;
    console.log(
        "El resultado de " + ingreso + " x " + i + "es igual a: " + resultado
    );
}

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
*/
//do while
let producto=prompt("Ingresa un producto. Para salir, pulsa 0.")
do {
    alert("Ingresaste el producto: " + producto);
    producto=prompt("Ingresa un producto. Para salir, pulsa 0.")
} while (producto != "0");
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
    console.log("Seleccionaste Ague");
} else {
    console.log("Opción no valida.");
}

let opcion1 = prompt("Ingrese una opción\n1-Café\n2-Té\n3-Chocolate\n4-Agua");
switch (opcion1) {
    case "1":
        console.log("Seleccionaste Café");
        break;
    case "2":
        console.log("Seleccionaste Té");
        break;
    case "3":
        console.log("Seleccionaste Chocolate");
        break;
    case "4":
        console.log("Seleccionaste Agua");
        break;

    default:
        console.log("Opción no valida");
        break;
}
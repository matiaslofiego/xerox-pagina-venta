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




while (opcion!=0) {
    opcion=prompt("Ingrese una categoría\n1- Comics\n2- Mangas\n3- Videojuegos\n4- Juegos de Cartas")

    }

alert("Gracias por su compra")
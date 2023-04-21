//alert("Hola a todos, estoy desde un archivo de Js")
//prompt("Ingrese su edad:")

//* Diferentes tipos de datos

/*
 //*Dato entero: 5 
 //*dato Flotante (decimal): 5.7 el punto es lo que separa decimales
 //*Dato String (alfanumerico): "Seba" o 'Seba'
 //*Dato booleanos: true , false


*/

//*Declaracion de variables

//usamos las etiquetas let, var, const
/*
let nombre = "Sebastian";
console.log(nombre);

var edad = 35;
console.log(edad);

const mascota = "Gamora"
console.log(mascota);

var: podemos redeclarla y cambiarle el dato.
var edad = 40
console.log(edad)

let: podemos cambiarle el dato, pero no REDECLARARLO.
nombre="Carlos"
console.log(nombre)

const: no nos permite redeclarar ni reasignar un valor a una variable.
mascota = "variable"
console.log(mascota);
*/

//*escritura sobre el documento

//document.write("<p> Esto viene de Js </p>")
/*
let nombre = prompt("Hola! Ingrese su nombre: ")

document.write('<h1>Hola "+nombre+" Bienvenido a JS!</h1>')
document.write(`<h1 style="background-color: black;">Hola ${nombre} Bienvenido a JS!</h1>`)
*/
/*
let numero1 = prompt("Ingrese un numero: ")
let numero2 = prompt("Ingrese un numero: ")

let resultado = numero1+numero2
console.log(typeof(numero1));
console.log(typeof(resultado));
document.write(`La suma de ${numero1} y ${numero2} es ${resultado}`)
*/
//* Operaciones con datos

console.log(2+2);
console.log(8-2);
console.log(10*2);
console.log(15/5);

//quiero dividir de manera ENTERA 17 alfajores en 7 chicos y saber CUANTOS ME SOBRAN
console.log(17/7);

//parte entera
console.log(parseInt(17/7)); //? 2 alfajores para cada chico

//parte sobrante (resto de una division)
console.log(17%7); //? nos sobran 3 alfajores

console.log("Hola"+"mundo") //? Concatenacion: es una union de string con el simbolo de suma
console.log("Hola"+5); //? unir strings con datos numericos
console.log(4+5+"px");
console.log(4+5.5+"6");

//? curiosidades en Js

console.log("Hola"+true); //* si ponemos un booleano con un string concatenados, Js lo transformara en String

//! si intentamos operar de otra manera un string ALFABETICO con un numero, nos dara que el resultado es NaN (Not a Number)
console.log("hola"*5);
console.log("hola"/5);
console.log("hola"-5);

//TODO: ATENCION! Si en cambio, nuestro string es NUMERICO, podremos operar con el. 
//? En estos casos Js determina que los valores que uno le pasa, son NUMEROS

//! COHERCION DE DATOS
console.log("5"*8);
console.log("15"-8);
console.log("15"/"3");
console.log("2"**"6");

console.log(5+false); //* En este caso, al tener NUMEROS e intentar operar con booleanos, JS transforma ese booleano a numero! si es true es un 1, si es false un 0
console.log(true+true); //! true es 1 y false es 0

//? como hacemos una suma en Js de numeros que recibe del usuario??
/*
let numero1 = prompt("Ingrese un numero: ")
let numero2 = prompt("Ingrese un numero: ")

let resultado = parseInt(numero1)+parseInt(numero2)
console.log(typeof(numero1));
console.log(typeof(resultado));
document.write(`<h2>La suma de ${numero1} y ${numero2} es ${resultado}</h2>`)

let decimal = prompt("Ingrese un numero con decimales: ")
document.write(`<h1>${parseFloat(decimal)}</h1>`) //* Convertimos un string a decimal
*/
//? operadores logicos: nos dan como resultado un valor de V o f (un true o false)
/*

> mayor
< menor
>= mayor igual
<= menor igual
== igual en valor
!= diferente en valor
=== igual en tipo y valor
!== distinto en triple y valor

?los resultados siempre seran VERDADERO O FALSO
*/

//? CONDICIONALES:

//* podremos entrar si nuestra edad es mayor o igual a 18.

let edad = 18;
//* if nos permite evaluar la condicion, y en caso que no se cumpla, se ejecuta la sentencia else


if (edad >= 18) {
    console.log("Usted puede ingresar.");
} else {
    console.log("Usted no puede ingresar al establecimiento");
}

//? Pedimos al usuario que nos indique su nombre_user y password. Si ambos son correctos, puede ingresar

let nombre_user = "seba_global_09";
let password = 155896;

let nombre_user_db = "seba_global_09"
let password_db = 155896

//? conectores logicos

/*
AND: && -> nos dice que el bloque sera VERDADERO si todas sus condiciones son VERDADERAS
OR: || -> nos dice que el bloque sera VERDADERO si POR LO MENOS una condicion es VERDADERA
NOT: ! -> negara el resultado de lo devuelto: si es true, lo hara false y viceversa
*/

if( nombre_user === nombre_user_db && password === password_db) {
    console.log("Acceso concedido");
} else {
    console.log("Contraseña/usuario incorrectos");
}

//? en un banco, tanto el gerente como el tesorero, tienen la llave de la caja fuerte. Para abrir la caja, solo se necesita que este presente uno de ellos. Si esta el gerente o el tesorero, podremos abrir la caja

let gerente = true;
let tesorero = true;

if (gerente === true || tesorero === true)  { 
    console.log("Se puede acceder a la caja fuerte");
} else {
    console.log("No se puede abrir");
}

//? En un edificio hay 3 depto ocupados y 3 deshabitados. en el 1 vive seba, en el 2 roxy, 3 vive pablo. Con el portero podemos llamr a cualquier de esos deptos. El resto de deptos, cuando llamemos al portero, nos dira "comunicando con porteria"

let depto = 1;

if (depto === 1) {
    console.log("LLamando a Seba");
} else if (depto === 2) {
    console.log("Llamando a Roxy");
} else if (depto === 3 ) {
    console.log("llamando a Pablo");
} else {
    console.log("Llamando a Porteria");
}

//? operador NOT : !



//? bomba: se pone un numero del 1 al 9. si apreta el 5 , explota todo

let numero = 5

if (numero !== 5) {
    console.log("No Explota");
} else {
    console.log("Explota")
};

//? si no tiene datos (esto puede ser false, 0, "", null, undefined) se ejecuta el IF:
let usuario = "";
console.log(usuario)

if (!usuario) { 
    console.log("usuario vacio");
}
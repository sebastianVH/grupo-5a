//? bucles:

//?FOR: EL FOR ES UN BUCLE QUE RECORRE ESTRUCTURAS ITERATIVAS (array,objetos,string)

//* bucle FOR (clasico): trabaja de manera NUMERICA (empieza en un indice numerico y finaliza en otro)

//while de contador desde el 0 hasta el 9
/*
 
let contador = 0
while(contador < 10){
    console.log(contador)
    contador++
}

*/

//*equivalencia en un bucle FOR a un while con contador:

//indices:     0           1         2      3      4       5      6
let array = ["Banana","Mandarina","Pera","Kiwi","Melon","Sandia","Uva","Frutilla","Durazno","Toronja"]


for(let i = 0; i < array.length;i++){
    console.log(array[i]);
}

//? bucle FOREACH: nos sirve para recorrer un array, y ejecutar algun tipo de accion sobre cada elemento PERO NO MODIFICA NI CREA NUEVOS ELEMENTOS

let array_numeros = [1,2,3,5,7,9,11,13]

array_numeros.forEach((numero) => {console.log(numero*2)})


//console.log(nuevo_array); //! no nos va a crear algo nuevo (array, string)

console.log(array_numeros); //! no va a modificar el original

//?bucle FOR IN: RECORRER un objeto, el cual, sacaremos cada una de sus propiedades, para utilizar en nuestro bucle

let persona = {nombre:"Seba", edad:35, ciudad:"Mdq", mascotas : { 1: "Firulais", 2: "Gamora", animales : "Gatos" },hobbies:["Tocar la guitarra","Jugar en la PC","Escuchar Audiolibros"]}


console.log(persona["edad"])

for (let propiedad in persona ){
    console.log(propiedad);
    //! USAR BRACKET NOTATION en un bucle FOR-IN  para ver EL CONTENIDO DE LA PROPIEDAD
    console.log(persona[propiedad]); 
}

//? for OF: nos permite recorrer arrays,string, no funciona para recorrer OBJETO

let array_nombres = ["Seba","Lore","Emi","Augusto","Florencia"] //Array
let string = "Hola Mundo" //String
let comida = {nombre:"Pizza", ingredientes: ["Harina","Agua","Queso","Salsa de tomate"] ,coccion:20} //objeto

for (let i of array_nombres){ //NOS MUESTRA CADA CONTENIDO EN MIS INDICES
    console.log(i);
}

for (let i of string){ //NOS MUESTRA CADA CARACTER EN NUESTRO STRING
    console.log(i);
}

/*
for (let i of comida) { //!!! NO SE PUEDE ITERAR CON UN FOR - OF
    console.log(i);
}
*/


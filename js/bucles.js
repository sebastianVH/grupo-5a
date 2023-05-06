//? Bucles: son estructuras que REPITEN UNA PORCION O TODO EL CODIGO, basados en una decision. Estas desiciones se van a dar en base a un BOOLEANO: DETERMINAR si el resultado de alguna comparacion logica es VERDADERO O FALSO. Para que un bucle cumpla su ejecucion, este debe ser VERDADERO, en su evaluacion booleana. Al menot que un bucle nos de falso, este no se ejecutara mas.

//* BUCLE WHILE: este bucle, evalua una expresion BOOLEANA para poder ejecutarse o no. Esta evaluacion de tipo booleana puede evaluar tanto EXPRESIONES , como COMPARACIONES del tipo NUMERICAS.

/*
SINTAXIS:

-Escribimos su palabra reservada => while
-dentro de PARENTESIS ponemos las expresiones o expresion a evaluar
-dentro de llaves, el bloque de codigo a ejecutar

while (*expresiones*) {
    *codigo a ejecutar*
}

*/

//TODO: vamos a hacer un contador del 1 al 10. Eso lo escribiremos en la consola

//! SIEMPRE DEBEMOS DEFINIR ANTES LAS VARIABLES QUE USAREMOS DENTRO DE NUESTRO BUCLE

let numero = 1

while(numero <= 10) {
    console.log(numero);
    numero++ //! RECORDAR PONER DENTRO DEL WHILE, NUESTRA VARIABLE DE INCREMENTO PARA EL CORTE, SI TRABAJAMOS CON LOS DENOMINADOS "CONTADORES"
}

//TODO: vamos a hacer un contador de pedidos: en base a una cantidad de personas que haya en una mesa, le vamos a preguntar que bebida va a tomar. podemos ofrecerle "agua","gaseosa" o "cerveza". Para cada persona, anotaremos en un contador , que tipo de bebida pidio

let personas = 4
let counter_pedidos = 0 //* esto es un contador de pedidos: me permite saber cuantos pedidos llevo, y que sirva como VARIABLE y CASO DE CORTE
let counter_agua = 0
let counter_gaseosa = 0
let counter_cerveza = 0


while(counter_pedidos < personas){
    let pedido = prompt("¿Que bebida desea pedir? Tenemos agua,gaseosa o cerveza: ")
    if (pedido === 'agua') {counter_agua++}
    else if (pedido === 'cerveza') {counter_cerveza++}
    else if (pedido === 'gaseosa') {counter_gaseosa++}
    else {
        alert("No contamos con la bebida pedida!")
        continue //!continue: esta expresion OBLIGA AL CODIGO A VOLVER A LA LINEA INICIAL DEL WHILE. Esto significa que lo que se encuentre debajo NO SE EJECUTA
        }
    counter_pedidos++
}

alert("Ya se tomaron todos los pedidos")

//todo: tengo que adivinar un numero secreto que tengo en una variable. mientras no lo adivine, debo seguir arriesgando numeros!

let numero_secreto = 15 //* el numero que debe adivinar es el 15
let numero_arriesgado; //* esto es un dato UNDEFINED: esta creado pero no tiene valor

while(numero_secreto != numero_arriesgado) {
    numero_arriesgado = prompt("Arriesgue un numero: ") //* este numero arriesgado va a ser un "string"
    if(numero_arriesgado > numero_secreto) {alert("Su numero es mas grande que el secreto!!")}
    else if(numero_arriesgado < numero_secreto) {alert("Su numero es mas chico que el secreto!!")}
    else alert("Acertaste!!! el numero secreto era"+ numero_secreto)
}

 

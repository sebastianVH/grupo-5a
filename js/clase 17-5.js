//? Bucles: vamos a utilizar el bucle FOR y el Bucle WHILE


/* 
TODO: Vamos a crear un menu de cajero: simulara como nosotros ingresamos dentro de un cajero automatico y trabajaremos con cada una de las opciones: este cajero tendra 3 opciones: 1) Retirar 2) Depositar 3) Salir
Este cajero, al principio, pedira LA CLAVE DE USUARIO. Si es incorrecta, nos dira un mensaje "Clave incorrecta, intente nuevamente". Cuando pongamos la clave correcta , podremos acceder a nuestro menu de cajero.
Tendremos un saldo inicial de 10000, el cual vamos a ir actualizando segun lo que hagamos (deposito/retiro)
Las opciones se repetiras MIENTRAS QUE NO ELIJA LA OPCION DE SALIR (while con argumento o While (true))
*/
//* Cremos clave de usuario que usaremos para validar el ingreso
let clave_usuario = 2584

//*creamos una validacion para poner ENTRAR AL CAJERO.

alert("Bienvenido a nuestro sistema! ")
while (true){
    let ingreso_clave = prompt("Ingrese su clave: ")

    //*debo validar la clave! que coincida mi "clave_usuario" con "ingreso_clave". 
    if (clave_usuario == ingreso_clave) {
        alert("Acceso concedido")
        break //* usamos un BREAK para romper el bucle! Sino, este se repetira de manera infinita
    } else {
        alert("Clave incorrecta")    
    }
}

let saldo = 10000 //* este es mi saldo

while(true){
    let opcion_cajero = prompt("Ingrese una opcion:\n1)Retirar\n2)Depositar\n3)Consulta Saldo\n4)Salir")

    if (opcion_cajero == 1) {
        while (true) {    
            let monto_retiro = prompt("Ingrese monto a retirar: ")
            if (saldo < monto_retiro) { //? si ingresa un monto superior al saldo, nos marca que es imposible el retiro
                alert("Saldo Insuficiente! Ingrese otro monto")
            } else { 
                saldo = saldo - monto_retiro 
                alert("Se han retirado " + monto_retiro)
                break //! NUNCA OLVIDAR EL BREAK PARA SALIR DEL BUCLE!
            }
        }
    }else if (opcion_cajero == 2) {
        let monto_deposito = prompt("Ingrese el monto a depositar: ")
        saldo = saldo + parseInt(monto_deposito)  //TRANSFORMO MI monto_deposita a ENTERO
        alert("Deposito confirmado. Su nuevo saldo es "+ saldo)

    } else if(opcion_cajero == 3){
            alert(`Su saldo es: ${saldo}` ) 
    }   else if (opcion_cajero == 4) {
        alert("Gracias por utilizar nuestros servicios!")
        break //! NUNCA OLVIDAR EL BREAK PARA SALIR DEL BUCLE!
    } else {
        alert("Opcion no valida.")
    }
}//*aca termina el while
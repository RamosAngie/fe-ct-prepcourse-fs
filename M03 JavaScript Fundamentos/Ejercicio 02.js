/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var rsuma = x+y;
   return rsuma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var rresta = x - y;
   return rresta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var rdividir = x / y;
   return rdividir;

}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var rmultiplicar = x * y;
   return rmultiplicar;

}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var rresto = x % y;
   return rresto;
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

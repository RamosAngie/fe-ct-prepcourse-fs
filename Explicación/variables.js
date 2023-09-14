/*
    Numericas: Guardan numeros, con coma, sin coma, positivos y negativos. EJ: 8, 3.15, -6
    Texto: Guardan letras o palabras y simbolos. EJ= "@" "Hola Angie"  "¿como estas?"
    Booleanos: Guardan true o false.
        EJ: 5 > 8 = false
    undefined: Son variables que no tienen un tipo definido.
    null: totalmente vacia y no esta creada.

    Como crear una variable:

    var nombre;

    Ej: Crear variable llamada "numeros".
    Respuesta: var numeros;

    Ej: Guardar el numero 8 en la variable creada anteriormente.
    Respuesta: numeros = 8;

    Hay variable que se llaman constantes eso es porque desde que la creamos no se puede cambiar el valor de lo que guarda
    
    const numeros = 8;

    Operadores logicos:

    < (menor a) ej: 8 < 15 = Verdadero
    > (mayor a) ej: 8 > 2 = Verdadero
    <= (menor o igual) 8 <= 8 = Verdadero
    >= (mayor o igual) 8 >= 15 = Falso

    == (Igual a) 2 == "2" -> Verdadero. (Aca solo el valor tiene que ser igual)
    === (Identico a) 2 === "2" -> Falso. (Aca tanto el valor como el tipo deben ser iguales)
    != (Distinto de) 1 != 2 -> Verdadero.
*/

//Generar una funcion que le pase 2 datos por parametro y me devuelva la suma.

function sumar (n1,n2){
    var resultado;
    resultado = n1+n2;
    return resultado;
}

var resultadoFuncion;
resultadoFuncion = sumar(8,10);
consola.log(resultadoFuncion);
var nombre = "Cesar",
  apellido = "Guerron";

var nombreMayusculas = nombre.toUpperCase();
var apellidoMayusculas = apellido.toUpperCase();

//primer caracter de un string

var primeraLetraNombre = nombre.charAt(0);
var cantidadLetrasNombre = nombre.length;

//Interpolacion de texto
var nombrecompleto = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);

var ultimaLetra = nombre.substr(nombre.length - 1, 1);

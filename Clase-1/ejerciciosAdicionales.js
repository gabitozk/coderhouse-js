//Calcular el área de un cuadrado
let lado = parseInt(prompt("Ingrese el tamaño de los lados del cuadrado (cm):"));
let area = lado * lado;
console.log ("El área de tu cuadrado es: " + area);

//El consecutivo de un número
let numero = parseInt(prompt("Ingrese un número:"));
let consecutivo = numero + 1;
console.log ("El número consecutivo del número ingresado es: " + consecutivo);

//Diferencia de edad
let edadUno = parseInt(prompt("Ingrese la edad de la primera persona:"));
let edadDos = parseInt(prompt("Ingrese la edad de la segunda persona:"));
console.log("La diferencia de edad es de " + (edadUno - edadDos) + " año/s");

//Calcular edad con año de nacimiento
let userYearBirth = parseInt(prompt("Ingrese su año de nacimiento:"));
const currentYear = new Date().getFullYear();
console.log("Usted tiene " + (currentYear - userYearBirth) + " años");
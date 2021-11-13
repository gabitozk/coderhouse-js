//Número mayor a 1000
let userNumber = Number(prompt("Ingrese un número:"));

if (userNumber > 1000) {
    alert("El número ingresado es mayor a 1000");
} else {
    alert("El número ingresado es menor o igual que 1000");
}

//Texto igual a "Hola"
let userGreeting = prompt("Ingrese un texto:");

if (userGreeting == "Hola") {
    alert("Tu saludo es correcto");
} else {
    alert("Tu saludo no es correcto");
}

//Evaluar entre 10 y 50 
let number = Number(prompt("Ingrese un número:"));

if (number > 10 && number < 50) {
    alert("El número esta entre 10 y 50");
}

//Mayor de tres números -- Ejercicio adicional

let primerNum = Number(prompt("Ingresa un número: "));
let segundoNum = Number(prompt("Ingresa otro número:"));
let tercerNum = Number(prompt("Ingrese un último número:"))

if (primerNum > segundoNum && primerNum > tercerNum) {
    console.log(primerNum + " es mayor que " + segundoNum + " y " + primerNum);
} else if (segundoNum > primerNum && segundoNum > tercerNum) {
    console.log(segundoNum + " es mayor que " + primerNum + " y " + tercerNum);
} else if (tercerNum > primerNum && tercerNum > segundoNum) {
    console.log(tercerNum + " es mayor que " + primerNum + " y " + segundoNum);
}


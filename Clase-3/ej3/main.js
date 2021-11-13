let sumaNotasCurso = 0;

for (let i = 0; i < 10; i++) {
    let nombreApellido = prompt("Ingresa tu nombre y apellido:");
    let nota1 = Number(prompt("Ingrese la primer nota:"));
    let nota2 = Number(prompt("Ingrese la segunda nota:"));
    let nota3 = Number(prompt("Ingrese la última nota:"));
    
    //Promedio alumno
    let prom = (nota1 + nota2 + nota3) / 3;
    
    console.log(`El promedio final de ${nombreApellido} es de ${prom}`);

    sumaNotasCurso += prom;
}

console.log(`El promedio total del curso es: ${sumaNotasCurso / 10}`);
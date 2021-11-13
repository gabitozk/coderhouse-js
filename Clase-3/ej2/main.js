let operacion = prompt("Bievenido! Quiere \"sumar\" o \"restar\" (para salir escriba \"esc\") ");

while(operacion != "esc") {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    
    if (operacion == "sumar") {
        alert(`El resultado de la suma es ${num1 + num2}`);
    } else {
        alert(`El resultado de la resta es ${num1 - num2}`);
    }

    let operacion = prompt("Bievenido! Quiere \"sumar\" o \"restar\" (para salir escriba \"esc\") ");
}

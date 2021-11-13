//Elecciones (Vota por A o B)
let saludo = alert("Bienvenido! Tenés que votar por A o B");
let a = 0;
let b = 0;
let votoImpugnado = 0;


for (let i = 0; i < 10; i++) {
    let voto = prompt("Ingrese su voto:");

    if (voto == "A" || voto =="a") {
        a++;
    } else if (voto == "B" || voto == "b") {
        b++;
    } else {
        votoImpugnado++;
    }
}

//Muestra resultado
console.log("Los resultados de la votación:")
console.log(`Votos para A--> ${a}`);
console.log(`Votos para B--> ${b}`);
console.log(`Votos impugnados: ${votoImpugnado}`);
let dolares = Number(prompt("Ingresá cuantos dólares querés comprar:"));

function dolarToPeso(dolares) {
    let cotizacion = 104;
    return dolares * cotizacion;
}

// let impuestoPais = function (monto) { return monto * 0.30};
function impuestoPais(monto) {
    return monto * 0.30;
}

// let percepcionAFIP = function (monto) { return monto * 0.35};
function percepcionAFIP(monto) {
    return monto * 0.35;
}

console.log(`Si queres comprar $${dolares} dólares te va a salir:`);
console.log (`$${dolarToPeso(dolares) + impuestoPais(dolarToPeso(dolares)) + percepcionAFIP(dolarToPeso(dolares))} AR incluyendo los impuestos.`);
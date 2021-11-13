const valorHoraToyota = 2230;
const valorHoraFiat = 1250;
const valorHoraPeugeot = 3545;

let vehiculo = prompt(
  "Que vehiculo desea?(Toyota | Fiat | Peugeot):").toLocaleLowerCase();
let cantidadHoras = Number(prompt("Ingrese la cantidad de horas:"));

function calcularPrecioTotal(vehiculo, horas) {
  switch (vehiculo) {
    case "peugeot":
      return valorHoraPeugeot * horas;
      break;
    case "fiat":
      return valorHoraFiat * horas;
      break;
    case "toyota":
      return valorHoraToyota * horas;
      break;
  }
}


console.log(
  `El costo total de alquiler del vehiculo ${vehiculo} por ${cantidadHoras} horas es de $${calcularPrecioTotal(
    vehiculo,
    cantidadHoras
  )}`
);

////Array para hacer push de los productos/vehículos
const vehiculos = [];

////Clase principal para generar los vehículos
class Autos {
  constructor(marca, modelo, anio, id, precioDia, stock, imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.id = id;
    this.precioDia = precioDia;
    this.stock = stock;
    this.imagen = imagen;
  }

  calcPrecioPorDia(dias) {
    return this.precioDia * dias;
  }

  calcEnvioAuto(km) {
    if (km <= 10) {
      return 1920;
    } else if (km > 10 && km <= 20) {
      return 3290;
    } else {
      return 5290;
    }
  }

  getStock() {
    if (this.stock > 0) {
      return true;
    } else {
      return false;
    }
  }
}

////Push del stock de vehículos hacia el array 'vehiculos'
vehiculos.push(
  new Autos("Volkswagen", "Polo", 2020, 1, 4108, 6, "./img/gol.png")
);
vehiculos.push(
  new Autos("Jeep", "Renegade", 2017, 2, 6510, 6, "./img/renegade.png")
);
vehiculos.push(
  new Autos("Ford", "Focus", 2021, 3, 3300, 1, "./img/ecosport.png")
);
vehiculos.push(new Autos("Jeep", "Compass", 2021, 4, 4471, 2, "./img/hrv.jpg"));
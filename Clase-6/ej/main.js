////Array para pushear los productos/vehículos
const vehiculos = [];


////Clase principal para generar los vehículos
class Autos {
    constructor(marca, modelo, anio, precioHora, precioDia, stock) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precioHora = precioHora;
        this.precioDia = precioDia;
        this.stock = stock;
    }

    calcPrecioPorHora(modelo, horas) {
        if (modelo == this.modelo || modelo == this.modelo.toLowerCase()) {
            return this.precioHora * horas;
        }
    }

    calcPrecioPorDia(modelo, dias) {
        if (modelo == this.modelo || modelo == this.modelo.toLowerCase()) {
            return this.precioDia * dias;
        }
    }

    calcEnvioAuto(km) {
        if(km <= 10) {
            return 1920;
        } else if (km > 10 && km <= 20) {
            return 3290;
        } else {
            return 5290;
        }
    }

    getStock(){
        if(this.stock > 0) {
            return true;
        } else {
            return false;
        }
    }
}


////marca, modelo, año, precioHora, precioDia, stock
vehiculos.push(new Autos ("Volkswagen", "Polo", 2020, 2190, 4108, 4));
vehiculos.push(new Autos ("Jeep", "Renegade", 2017, 3890, 6510, 6));
vehiculos.push(new Autos ("Ford", "Focus", 2021, 3300, 5120, 1));
vehiculos.push(new Autos ("Jeep", "Compass", 2021, 4471, 9102, 2 ));



class Autos {
    constructor(modelo, marca, anio, precioHora, precioDia, id, stock) {
        this.modelo = modelo;
        this.marca = marca;
        this.anio = anio;
        this.precioHora = precioHora;
        this.precioDia = precioDia;
        this.id = id;
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

    calcEnvioAuto(km){
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

let fordKa = new Autos("Ka", "Ford", 2018, 4509, 10599, 100, 4);
let peugeot208 = new Autos("208", "Peugeot", 2020, 5210, 12532, 101, 2);
let toyotaEthios = new Autos("Ethios", "Toyota", 2019, 4817, 11400, 102, 7);



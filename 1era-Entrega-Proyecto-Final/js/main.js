////Array para hacer push de los productos/vehículos
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

    calcPrecioPorHora(horas) {
            return this.precioHora * horas;
    }

    calcPrecioPorDia(dias) {
            return this.precioDia * dias;
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


////Marca, Modelo, Año, precioHora, precioDia, stock
vehiculos.push(new Autos ("Volkswagen", "Polo", 2020, 2190, 4108, 4));
vehiculos.push(new Autos ("Jeep", "Renegade", 2017, 3890, 6510, 6));
vehiculos.push(new Autos ("Ford", "Focus", 2021, 3300, 5120, 1));
vehiculos.push(new Autos ("Jeep", "Compass", 2021, 4471, 9102, 2 ));


////Filtros
function filtroMayorPrecioDia(array) {
    array.sort((a, b) => {
        if (a.precioDia < b.precioDia) {
            return 1;
        }
        
        if (a.precioDia > b.precioDia) {
            return -1;
        }

        return 0;
    });
}

function filtroMenorPrecioDia(array) {
    array.sort((a, b) => {
        if (a.precioDia < b.precioDia) {
            return -1;
        }

        if (a.precioDia > b.precioDia) {
            return 1;
        }

        return 0;
    });
}

function filtroMayorPrecioHora(array) {
    array.sort((a, b) => {
        if (a.precioHora < b.precioHora) {
            return 1;
        }

        if (a.precioHora > b.precioHora) {
            return -1;
        }

        return 0;
    });
}

function filtroMenorPrecioHora(array) {
    array.sort((a, b) => {
        if (a.precioHora < b.precioHora) {
            return -1;
        }

        if (a.precioHora > b.precioHora) {
            return 1;
        }

        return 0;
    });
}

function filtroMarca(array) {
    let marca = prompt("Ingrese la marca que desea filtrar:").toLocaleLowerCase();

    for (let item of array) {
        if (item.marca.toLocaleLowerCase() == marca) {
            console.log(item);
        }
    }
}


////////Flujo de cotización
alert("Bienvenido! Seleccione su vehículo por favor");


for (let i = 0; i < vehiculos.length; i++) { ////Muestra vehículos disponibles
    alert(`Opción ${i+1}: ${vehiculos[i].marca} ${vehiculos[i].modelo} --> Precio por hora: $${vehiculos[i].precioHora}, Precio por día: $${vehiculos[i].precioDia}`);
}    

let vehiculoSeleccionado = Number(prompt("Seleccione su vehiculo (Ingrese el número de opción):"));
let diaHora = prompt("Quiere contratar por hora o por día? (Ingrese h o d)").toLocaleLowerCase();

if (vehiculoSeleccionado == 1) {
    if (diaHora == "d") {
        let dias = Number("Por cuantos días quiere contratar el vehículo?:");
    }
}

function cotizar(vehiculoSeleccionado, diaHora) {
    if(vehiculoSeleccionado == 1) {
        if (diaHora == "d") {
            let dias = Number(prompt("Cuantos días vas a alquilar el vehículo?:"));
            alert(`El precio total por ${dias} dias del ${vehiculos[0].marca} ${vehiculos[0].modelo} es de $${vehiculos[0].calcPrecioPorDia(dias)}`);
        } else if (diaHora == "h") {
            let horas = Number(prompt("Cuantas horas vas a alquilar el vehículo?:"));
            alert(`El precio total por ${horas} horas del ${vehiculos[0].marca} ${vehiculos[0].modelo} es de $${vehiculos[0].calcPrecioPorHora(horas)}`)
        } else {
            alert("Disculpe, no podemos realizar la cotización");
        }
    } else if (vehiculoSeleccionado == 2) {
        if (diaHora == "d") {
            let dias = Number(prompt("Cuantos días vas a alquilar el vehículo?:"));
            alert(`El precio total por ${dias} dias del ${vehiculos[1].marca} ${vehiculos[1].modelo} es de $${vehiculos[1].calcPrecioPorDia(dias)}`);
        } else if (diaHora == "h") {
            let horas = Number(prompt("Cuantas horas vas a alquilar el vehículo?:"));
            alert(`El precio total por ${horas} horas del ${vehiculos[1].marca} ${vehiculos[1].modelo} es de $${vehiculos[1].calcPrecioPorHora(horas)}`)
        } else {
            alert("Disculpe, no podemos realizar la cotización");
        }
    } else if (vehiculoSeleccionado == 3) {
        if (diaHora == "d") {
            let dias = Number(prompt("Cuantos días vas a alquilar el vehículo?:"));
            alert(`El precio total por ${dias} dias del ${vehiculos[2].marca} ${vehiculos[2].modelo} es de $${vehiculos[2].calcPrecioPorDia(dias)}`);
        } else if (diaHora == "h") {
            let horas = Number(prompt("Cuantas horas vas a alquilar el vehículo?:"));
            alert(`El precio total por ${horas} horas del ${vehiculos[2].marca} ${vehiculos[2].modelo} es de $${vehiculos[2].calcPrecioPorHora(horas)}`)
        } else {
            alert("Disculpe, no podemos realizar la cotización");
        }
    }   else if (vehiculoSeleccionado == 4) {
        if (diaHora == "d") {
            let dias = Number(prompt("Cuantos días vas a alquilar el vehículo?:"));
            alert(`El precio total por ${dias} dias del ${vehiculos[3].marca} ${vehiculos[3].modelo} es de $${vehiculos[3].calcPrecioPorDia(dias)}`);
        } else if (diaHora == "h") {
            let horas = Number(prompt("Cuantas horas vas a alquilar el vehículo?:"));
            alert(`El precio total por ${horas} horas del ${vehiculos[3].marca} ${vehiculos[3].modelo} es de $${vehiculos[3].calcPrecioPorHora(horas)}`)
        } else {
            alert("Disculpe, no podemos realizar la cotización");
        } 
    }   else {
        alert("Disculpe, esta cotización no se puede realizar");
    }
}

cotizar(vehiculoSeleccionado, diaHora);












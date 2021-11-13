////Array para hacer push de los productos/vehículos
const vehiculos = [];

////Clase principal para generar los vehículos
class Autos {
  constructor(marca, modelo, anio, precioHora, precioDia, stock, imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.precioHora = precioHora;
    this.precioDia = precioDia;
    this.stock = stock;
    this.imagen = imagen;
  }

  calcPrecioPorHora(horas) {
    return this.precioHora * horas;
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

////Marca, Modelo, Año, precioHora, precioDia, stock
vehiculos.push(new Autos("Volkswagen", "Polo", 2020, 2190, 4108, 6, "./img/gol.png"));
vehiculos.push(new Autos("Jeep", "Renegade", 2017, 3890, 6510, 6, "./img/renegade.png"));
vehiculos.push(new Autos("Ford", "Focus", 2021, 3300, 5120, 1, "./img/ecosport.png"));
vehiculos.push(new Autos("Jeep", "Compass", 2021, 4471, 9102, 2, "./img/hrv.jpg"));

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

function insertarVehiculos() { ///Inserta autos en el HTML con los vehiculos disponibles en el array
    let contenedorListado = document.getElementById('listado');

    for (let i = 0; i < vehiculos.length; i++) {
        let cardAuto = `<div class="bloque-1">
                            <h3>${vehiculos[i].marca} ${vehiculos[i].modelo}</h3>
                            <p>Dentro de categoría de <strong>Autos Económicos</strong></p>
                            <img src="${vehiculos[i].imagen}" alt="">
                            <ul>
                                <li><i class="far fa-snowflake"></i>Aire acondicionado</li>
                                <li><i class="fas fa-suitcase-rolling"></i>2 Valijas</li>
                                <li><i class="fas fa-users"></i>5 personas</li>
                                <li><i class="fas fa-baby-carriage"></i>Silla de bebé</li>
                            </ul>
                        </div>
                        <div class="bloque-2">
                            <p>Precio final p/día</p>
                            <h4>$${vehiculos[i].precioDia}</h4>
                            <button class="boton-cotizar" onclick="cotizar()">Cotizar</button>
                            <p>Precio final p/hora</p>
                            <h4>$${vehiculos[i].precioHora}</h4>
                            <button class="boton-cotizar" onclick="cotizar()">Cotizar</button>
                        </div>`;
        
        let divCard = document.createElement('div');
        divCard.classList.add("card-autos");
        divCard.innerHTML = cardAuto;

        contenedorListado.appendChild(divCard);
    }
                                                    
}

insertarVehiculos(); ////Llama e inserta vehiculos


function cotizar() {

  let contenedor = document.getElementById("content");
  contenedor.innerHTML = `<section id="formulario">
                            <h1>Ingrese sus datos</h1>
                            <article>
                                <label>Nombre</label>
                                <input id ="input-nombre"type="text" placeholder="Escriba su nombre">        
                            </article>
                            <article>
                                <label>Apellido</label>
                                <input id="input-apellido" type="text" placeholder="Escriba su apellido">        
                            </article>
                            <article>
                                <label>Telefono</label>
                                <input id="input-telefono" type="Number" placeholder="Ingrese su teléfono">        
                            </article>
                            <article>
                                <label>Email</label>
                                <input id="input-email" type="email" placeholder="Escriba su email">        
                            </article>
                            <article>
                                <button onclick="mostrarInfo()">Continuar</button>
                            </article>
                          </section>`;
}



$(document).ready(function(){
  console.log("Todo listo")
});

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

function insertarVehiculos() {
  ///Inserta autos en el HTML con los vehiculos disponibles en el array
  let contenedorListado = document.getElementById("listado");

  for (let i = 0; i < vehiculos.length; i++) {
    let cardAuto = `<div class="bloque-1">
                            <h3>${vehiculos[i].marca} ${vehiculos[i].modelo}</h3>
                            <p>Dentro de categoría de <strong>Autos Económicos</strong></p>
                            <p>ID: <span class="carId">${vehiculos[i].id}</span></p>
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
                            <button class="boton-cotizar">Cotizar</button>
                            <i class="far fa-heart heartM"></i>
                        </div>`;

    let divCard = document.createElement("div");
    divCard.classList.add("card-autos");
    divCard.innerHTML = cardAuto;

    contenedorListado.appendChild(divCard);
  }
}

insertarVehiculos(); ////Llama e inserta vehiculos

////Muestro la cantidad de vehiculos 
$('#resultado-vehiculos').text(vehiculos.length);

///Llamo a todos los botones 'Cotizar'
let botonCotizar = document.querySelectorAll(".boton-cotizar");

///Agrego un listener a cada boton
for (let boton of botonCotizar) {
  boton.addEventListener("click", cotizar);
}

function cotizar(e) {
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
                                <button>Continuar</button>
                            </article>
                          </section>`;
}

//////////FAVORITOS

const favsOnLocal = [];

const cardAutos = document.querySelectorAll(".card-autos");
const botonFav = document.querySelectorAll(".fa-heart");
const favHeader = document.querySelector("#favoritos");

for (i = 0; i < localStorage.length; i++) {
  let itemKey = localStorage.key(i);

  favsOnLocal.push(JSON.parse(localStorage.getItem(itemKey)));

  for (j = 0; j < cardAutos.length; j++) {
    if (cardAutos[j].querySelector(".carId").textContent == itemKey) {
      cardAutos[j].querySelector(".heartM").classList.remove("far");
      cardAutos[j].querySelector(".heartM").classList.add("fas");
      cardAutos[j].querySelector(".heartM").style.color = "red";

      let car = vehiculos.find(e => e.id == cardAutos[j].querySelector(".carId").textContent);

      let liFav = document.createElement("li");
      liFav.innerHTML = `<div class="favImagen">
                            <img src="${car.imagen}">
                         </div>
                         <div>
                            <p><b>${car.marca} ${car.modelo}</b></p>
                            <p>$${car.precioDia} p/día</p>
                            <p>ID: <span id="favHeaderId">${car.id}</span></p>
                            <i id="deleteFavHeader" class="fas fa-trash"></i>
                         </div>`;

      let liFavElement = favHeader.appendChild(liFav);
      console.log(favHeader);
      liFavElement.querySelector('#deleteFavHeader').addEventListener('click', eliminarFavoritoHeader);
    }
  }
}

$('#dropdown-favoritos').click(function(){
  $('#favoritos').fadeToggle(200);
});


for (let fav of botonFav) {
  fav.addEventListener("click", agregarFavorito);
}

///Agrega vehiculo favorito
function agregarFavorito(e) {
  let fav = e.target;
  let parentFav = e.target.parentNode.parentNode;
  let carId = parentFav.querySelector(".carId").textContent;

  //Capturo el vehiculo en el array principal
  let car = vehiculos.find((e) => e.id == carId);

  if (localStorage.getItem(carId) == null) {
  
    let liFav = document.createElement("li");
    liFav.innerHTML = `<div class="favImagen">
                          <img src="${car.imagen}">
                       </div>
                       <div>
                          <p>${car.marca} ${car.modelo}</p>
                          <p>$${car.precioDia} p/día</p>
                          <p>ID: <span id="favHeaderId">${carId}</span></p>
                          <i id="deleteFavHeader" class="fas fa-trash"></i>
                       </div>`;

    let liFavElement = favHeader.appendChild(liFav);

    liFavElement.querySelector('#deleteFavHeader').addEventListener('click', eliminarFavoritoHeader);

    $(fav).removeClass('far').addClass('fas').css("color", "red")                
    
    localStorage.setItem(carId, JSON.stringify(car));
  
  } else {
  
    let spanId = favHeader.querySelectorAll("#favHeaderId");

    for (let item of spanId) {
      if (carId == item.textContent) {
        item.parentNode.parentNode.parentNode.remove();
      }
    }

    $(fav).removeClass('fas').addClass('far').css("color", "black")    
  
    localStorage.removeItem(carId);
  }
}


////////////////
let trashFavorito = document.querySelectorAll('#deleteFavHeader');

for (let trash of trashFavorito) {
  trash.addEventListener("click", eliminarFavoritoHeader);
}

function eliminarFavoritoHeader(e) {
  let carId = e.target.parentNode.querySelector('#favHeaderId').textContent;
  
  e.target.parentNode.parentNode.remove();

  localStorage.removeItem(carId);
}
/*JSON de autos como DB*/
const urlCars = "http://127.0.0.1:5500/3era-Entrega-Proyecto-Final/json/autos.json";
const getCars = () => {
  $.get(urlCars, function (autos) {
    console.log(autos);
  })
}

getCars();

function insertarVehiculos() {
  ///Inserta autos en el HTML con los vehiculos disponibles en el array
  let contenedorListado = document.querySelector("#listado");
  
  $.get(urlCars, function(autos) {
    ///Muestra cantidad de vehículos encontrados
    $('#resultado-vehiculos').text(autos.length);

    ///Recorre JSON e inserta vehículos
    for (let auto of autos) {
      let cardAuto = `<div class="bloque-1">
                              <h3>${auto.marca} ${auto.modelo}</h3>
                              <p>Dentro de categoría <strong>${auto.categoria}</strong></p>
                              <p>ID: <span class="carId">${auto.id}</span></p>
                              <img src="${auto.imagen}" alt="foto vehículo">
                              <ul>
                                  <li><i class="far fa-snowflake"></i>Aire acondicionado</li>
                                  <li><i class="fas fa-suitcase-rolling"></i>${auto.caracteristicas.valijas} valijas</li>
                                  <li><i class="fas fa-users"></i>${auto.caracteristicas.personas} personas</li>
                                  <li><i class="fas fa-baby-carriage"></i>Silla de bebé</li>
                              </ul>
                          </div>
                          <div class="bloque-2">
                              <p>Precio final p/día</p>
                              <h4>$${auto.precioDia}</h4>
                              <button class="boton-cotizar">Cotizar</button>
                              <i class="far fa-heart heartM"></i>
                          </div>`;
  
      let divCard = document.createElement("div");
      divCard.classList.add("card-autos");
      divCard.innerHTML = cardAuto;
  
      contenedorListado.appendChild(divCard);
    }
  }
  ).fail(function(){console.log("Verificar código")});
}

///Llama a función
insertarVehiculos();

////Filtros categorias
const botonCategoriaEconomicos = document.querySelector('#filtro-economicos');
const botonCategoriaCamionetas = document.querySelector('#filtro-camionetas');
const botonCategoriaMedianos = document.querySelector('#filtro-medianos');

function filtroEconomicos(){

}


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
                          <p><b>${car.marca} ${car.modelo}</b></p>
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



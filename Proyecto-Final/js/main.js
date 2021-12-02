/*JSON de autos*/
const urlCars =
  "./json/autos.json";

let autos = (function () {
  let json = null;
  $.ajax({
    async: false,
    url: urlCars,
    dataType: "json",
    success: function (data) {
      json = data;
    },
  });
  return json;
})();


function guardarEnLocalStorage(clave, valor) {
  localStorage.setItem(clave, valor);
}

function insertarVehiculos() {
  ///Inserta autos en el HTML con los vehiculos disponibles en el array
  let contenedorListado = document.querySelector("#listado");
  contenedorListado.innerHTML = "";

  ///Muestra cantidad de vehículos encontrados
  $("#resultado-vehiculos").text(autos.length);

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
                                <i class="far fa-heart heartM fa-lg"></i>
                            </div>`;

    let divCard = document.createElement("div");
    divCard.classList.add("card-autos");
    divCard.innerHTML = cardAuto;

    contenedorListado.appendChild(divCard);
  }

  $("#listado").fadeIn(500);
}

///Llama a función
insertarVehiculos();



/////*FILTROS*////
const botonFiltroCategoria = document.querySelectorAll(".filter");

for (let boton of botonFiltroCategoria) {
  boton.addEventListener("click", filtroCategoria);
}

function filtroCategoria(e) {
  let contenedorListado = document.querySelector("#listado");
  let categoria = e.currentTarget.querySelector("p").textContent;

  contenedorListado.innerHTML = "";

  let autosFilter = autos.filter(auto => auto.categoria == categoria)

  $("#resultado-vehiculos").text(autosFilter.length);

  if (autosFilter.length) {
    for (let auto of autosFilter) {
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
                              <i class="far fa-heart heartM fa-lg"></i>
                          </div>`;

      let divCard = document.createElement("div");
      divCard.classList.add("card-autos");
      divCard.innerHTML = cardAuto;

      contenedorListado.appendChild(divCard);

      e.currentTarget.classList.add("activo");
      
      let fav = document.querySelectorAll('.fa-heart'); 
      $(fav).click(agregarFavorito);
    }
  } else if(!autosFilter.length && categoria !== "Todos"){
    return;
  }
  else {
    insertarVehiculos();

    let fav = document.querySelectorAll('.fa-heart');
    $(fav).click(agregarFavorito);
  }

  let classFilter = document.querySelectorAll(".filter");
  for (let i = 0; i < classFilter.length; i++) {
    for (let j = 0; j < classFilter[i].classList.length; j++) {
      if (classFilter[i].classList[j] == "activo") {
        classFilter[i].classList.remove("activo");
      }
    }
  }

  e.currentTarget.classList.add("activo");
  
  let botonCotizar = $('.boton-cotizar');
  botonCotizar.click(cotizar);
}



////*FAVORITOS*////
const favsOnLocal = [];
const botonFav = document.querySelectorAll(".fa-heart");
const cardAutos = document.querySelectorAll(".card-autos");
const favHeader = document.querySelector("#favoritos");

for (let fav of botonFav) {
  fav.addEventListener("click", agregarFavorito);
}

$("#dropdown-favoritos").click(function () {
  $("#favoritos").fadeToggle(200);
});

function cargarFavoritos() {
  for (i = 0; i < localStorage.length; i++) {
    let itemKey = localStorage.key(i);

    favsOnLocal.push(JSON.parse(localStorage.getItem(itemKey)));

    for (j = 0; j < cardAutos.length; j++) {
      if (cardAutos[j].querySelector(".carId").textContent == itemKey) {
        cardAutos[j].querySelector(".heartM").classList.remove("far");
        cardAutos[j].querySelector(".heartM").classList.add("fas");
        cardAutos[j].querySelector(".heartM").style.color = "red";

        let car = autos.find(
          (e) => e.id == cardAutos[j].querySelector(".carId").textContent
        );

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
        liFavElement
          .querySelector("#deleteFavHeader")
          .addEventListener("click", eliminarFavoritoHeader);
      }
    }
  }
}

cargarFavoritos();

///Agrega vehiculo favorito
function agregarFavorito(e) {
  let fav = e.target;
  let parentFav = e.target.parentNode.parentNode;
  let carId = parentFav.querySelector(".carId").textContent;

  //Capturo el vehiculo en el array principal
  let car = autos.find((e) => e.id == carId);

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

    liFavElement
      .querySelector("#deleteFavHeader")
      .addEventListener("click", eliminarFavoritoHeader);

    $(fav).removeClass("far").addClass("fas").css("color", "red");

    guardarEnLocalStorage(carId, JSON.stringify(car));
  
  } else {
    
    let spanId = favHeader.querySelectorAll("#favHeaderId");

    for (let item of spanId) {
      if (carId == item.textContent) {
        item.parentNode.parentNode.parentNode.remove();
      }
    }

    $(fav).removeClass("fas").addClass("far").css("color", "black");

    localStorage.removeItem(carId);
  }
}

let trashFavorito = document.querySelectorAll("#deleteFavHeader");

for (let trash of trashFavorito) {
  trash.addEventListener("click", eliminarFavoritoHeader);
}

function eliminarFavoritoHeader(e) {
  let carId = e.target.parentNode.querySelector("#favHeaderId").textContent;
  let cards = document.querySelectorAll('.card-autos');
  
  ///Cambia el estilo del 'fav' en el card
  for (let card of cards) {
    if(card.querySelector('.carId').textContent == carId) {
      card.querySelector('.heartM').classList.remove("fas");
      card.querySelector('.heartM').classList.add("far");
      card.querySelector('.heartM').style.color = "black";
    }
  }

  e.target.parentNode.parentNode.remove();

  localStorage.removeItem(carId);

}



////*COTIZAR*////
///Llamo a todos los botones 'Cotizar'
let botonCotizar = document.querySelectorAll(".boton-cotizar");

///Agrego un listener a cada boton
for (let boton of botonCotizar) {
  boton.addEventListener("click", cotizar);
}

function cotizar(e) {
  let contenedor = document.getElementById("content");
  let id = e.target.parentNode.parentNode.querySelector('.carId').textContent;
  let car = autos.find( e => e.id == id);

  contenedor.innerHTML = "";
  let section = document.createElement('section');
  let div = document.createElement('div');
  
  let arrowBack = document.querySelector('#arrow-back');
  let a = document.createElement('a');
  let p = document.createElement('p');
  p.textContent = "Volver a Inicio";
  a.href ="./index.html";
  let i = document.createElement('i');
  i.classList.add("fas", "fa-arrow-left");
  a.appendChild(i);
  a.appendChild(p);
  arrowBack.appendChild(a);

  let sectionAuto = section;
  sectionAuto.setAttribute('id', "auto-detalle");

  contenedor.appendChild(sectionAuto);

  ///Características auto 
  div.setAttribute('class', "auto-caracteristicas");

  div.innerHTML = `<img src="${car.imagen}">
                    <h3>${car.marca} ${car.modelo}</h3>
                    <h4>Características</h4>
                    <ul>
                      <li><i class="far fa-snowflake"></i>Aire acondicionado</li>
                      <li><i class="fas fa-suitcase-rolling"></i>${car.caracteristicas.valijas} valijas</li>
                      <li><i class="fas fa-users"></i>${car.caracteristicas.personas} personas</li>
                      <li><i class="fas fa-baby-carriage"></i>Silla de bebé</li>
                   </ul>
                   <div>
                    <ul>
                      <li><i class="fas fa-check"></i>Cancelación gratuita</li>
                      <li><i class="fas fa-check"></i>Reserva flexible</li>
                      <li><i class="fas fa-check"></i>Seguro incluido</li> 
                    </ul>
                   </div> 
                   `
  
  sectionAuto.appendChild(div);

  ///Seleccion de dias y precio
  let divCotiza = document.createElement('div');
  
  divCotiza.setAttribute('class', "auto-cotiza");

  divCotiza.innerHTML = `<h2>Seleccioná el paquete de días</h2>
                         <h5><span>$${car.precioDia}</span> p/día</h5>
                         <ul>
                          <li>Alquiler por 3 días total <b>$${car.precioDia * 3}</b><button class="boton-compra">Comprar</button></li>
                          <li>Alquiler por 5 días total <b>$${car.precioDia * 5}</b><button class="boton-compra">Comprar</button></li>
                          <li>Alquiler por 7 días total <b>$${car.precioDia * 7}</b><button class="boton-compra">Comprar</button></li>
                          <li>Alquiler por 10 días total <b>$${car.precioDia * 10}</b><button class="boton-compra">Comprar</button></li>
                         </ul>
                        `
  sectionAuto.appendChild(divCotiza);
                        
  $('.boton-compra').click(insertarFormulario);

}


function insertarFormulario(e) {
  let precio = e.target.parentNode.querySelector('b').textContent;
  
  let divCompra = document.querySelector(".auto-cotiza");
  
  divCompra.innerHTML = `<h2>Total a pagar: ${precio}</h2>
                         
                         <form id="form-datos-pago">
                          <h3>Ingresá tus datos</h3>
                          <label>Nombre</label>
                          <input type="text" id="input-nombre" placeholder="Ingresá tu nombre" required>
                          <label>Apellido</label>
                          <input type="text" id="input-apellido" placeholder="Ingresá tu apellido" required>
                          <label>Email</label>
                          <input type="email" id="input-email" placeholder="Ingresá tu email" required>
                  
                          <h3>Método de pago</h3>
                          <ul>
                            <li><i class="fab fa-cc-visa"></i></li>
                            <li><i class="fab fa-cc-mastercard"></i></li>
                            <li><i class="fab fa-cc-paypal"></i></li>
                          </ul>
                          <label>Numero de tarjeta</label>
                          <input type="number" required>
                          <label>Código de seguridad</label>
                          <input type="number" required>
                          <input type="submit" value="Pagar" id="confirmar-pago"">
                         </form>
                        `

  $('#form-datos-pago').submit(function(e) {

    e.preventDefault();

    confirmarPago(precio, $('#input-email').val(), $('#input-nombre').val(), $('#input-apellido').val());

  })
}


function confirmarPago(precio, email, nombre, apellido) {
  
  let datos = { nombreUsuario: nombre, 
                apellidoUsuario: apellido, 
                emailUsuario: email };

  guardarEnLocalStorage(apellido, JSON.stringify(datos));

  setTimeout (function() { 
    
    $('#modal-pago').fadeIn(500);
    
    let modalContenido = document.querySelector('.modal-contenido');
    modalContenido.innerHTML = `<span class="close">&times;</span>
                                <h2>${nombre}, te confirmamos el pago!</h2>
                                <h4>Pagaste total ${precio}</h4>
                                <p>Ya podés retirar tu vehículo en nuestras sucursales</p>
                                <p>Te estaremos enviando toda la info a tu email: <b>${email}</b></p>`

    //Boton 'X' del modal
    let span = document.querySelector('.close');
    span.addEventListener('click', cerrarModalPago);

    }, 500);

}

//Cierra el modal de pago con un fadeOut
function cerrarModalPago(e) { 
  
  $('#modal-pago').fadeOut(400);

}


//////Clase publicaciones
class Publicaciones {
  constructor(titulo, parrafo) {
    this.titulo = titulo;
    this.parrafo = parrafo;
  }
}

const noticiaTecno = new Publicaciones(
  "Apple estrenó su nuevo iPhone",
  "Hoy la empresa de la manzana emitió una nueva keynote en donde mostro todos sus nuevos productos, entre ellos el famoso iPhone 13 el cual trae una nueva cámara."
);

const noticiaMundo = new Publicaciones(
  "Calentamiento global avanza rápidamente",
  "En el día de ayer se registró una ola de calor en Europa en el cual se registraron temperaturas de hasta 38 grados. Se alertó a toda la población con medidas para combatir el calor."
);

///Array para publicaciones
const noticias = [];

///Pusheo instancias
noticias.push(noticiaTecno, noticiaMundo);

///Inserto en html
for (let noticia of noticias) {
  let contenedor = document.querySelector("#noticias");
  let titulo = document.createElement("h2");
  let parrafo = document.createElement("p");

  titulo.textContent = noticia.titulo;
  titulo.style.fontFamily = "Verdana";
  titulo.style.fontSize = "20px";
  parrafo.textContent = noticia.parrafo;
  parrafo.style.fontFamily = "Arial";
  parrafo.style.fontSize = "16px";

  contenedor.appendChild(titulo);
  contenedor.appendChild(parrafo);
}


//////Clase productos
class Productos {
  constructor(nombre, precio, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

const playstation = new Productos(
  "Playstation 5 Standard", 
  120000, 
  "./assets/playstation5.jpg"
);

const teclado = new Productos(
  "Teclado Keychron K2", 
  35500, 
  "./assets/teclado.jpg"
);

///Array para productos
const productos = [];

///Pusheo instancias
productos.push(playstation, teclado);

for (let producto of productos) {
  let contenedor = document.querySelector('#productos');
  let cardProducto = document.createElement('div');
  
  cardProducto.style.width = "300px";
  cardProducto.style.border = "1px solid black";
  cardProducto.style.borderRadius = "10px";
  cardProducto.style.marginBottom = "10px";
  cardProducto.style.padding = "10px";
  cardProducto.style.fontFamily = "Verdana";
  cardProducto.innerHTML = `<img src="${producto.img}">
                            <h4>${producto.nombre}</h4>
                            <h5>$${producto.precio}</h5>
                            <button>Comprar</button>`

  contenedor.appendChild(cardProducto);
}


//////Clase personas 
class Personas {
  constructor (nombre, img){
    this.nombre = nombre;
    this.img = img;
  }
}

const user1 = new Personas(
  "Micaela Suarez", 
  "./assets/user1.jpg"
);

const user2 = new Personas(
  "Sebastian Gomez",
  "./assets/user2.jpg"
);

///Array para personas
const usuarios = [];

///Pusheo instancias
usuarios.push(user1, user2);

for (let usuario of usuarios) {
  let contenedor = document.querySelector('#usuarios');
  let divUsuario = document.createElement('div');

  divUsuario.innerHTML = `<img src="${usuario.img}">
                          <p>${usuario.nombre}</p>`

  contenedor.appendChild(divUsuario);
}
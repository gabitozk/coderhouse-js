let personas = [{nombre: "Mario", edad: 44}, {nombre: "Juan", edad: 19}, {nombre: "Mauricio", edad: 28}, {nombre: "Hernan", edad: 10}];

let productos = [{producto: "TV", precio: 35000}, {producto: "Tablet", precio: 120000}, {producto: "Monitor", precio: 55000}, {producto: "Tostadora", precio: 6900}, {producto: "Calefon", precio: 67000}];

let date = [{fecha: new Date("December 17, 1995")}, {fecha: new Date("July 4, 1992")}, {fecha: new Date("August 20, 2021")}, {fecha: new Date("February 15, 2007")}];

personas.sort((a, b) => {
    if(a.edad < b.edad){
        return 1;
    } 

    if(a.edad > b.edad){
        return -1;
    }

    return 0;
});

productos.sort((a, b) => {
    if(a.precio < b.precio) {
        return -1;
    } 

    if(a.precio > b.precio) {
        return 1;
    }

    return 0;
})

date.sort((a, b) => {
    if(a.fecha < b.fecha) {
        return -1;
    }

    if(a.fecha > b.fecha) {
        return 1;
    }

    return 0;
})


console.log(personas);
console.log(productos);
console.log(date);


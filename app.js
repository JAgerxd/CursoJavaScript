//funciones anonima y explicita

function imprimir(fn) {
    fn();

}


var persona = {
    nombre: "Juan",
    apellido: "Padilla"

}

var miFuncion = function(){
    console.log("miFuncion");

}

imprimir(miFuncion);



/*imprimir(function () {

    console.log("funcion anonima");
});*/

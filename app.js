//funciones

function imprimir(persona /* , apellido */) {

    console.log(persona.nombre + " " + persona.apellido);

    persona.nombre ="Maria";

    // apellido = apellido || "xxx"  //Forma 2

    /*if( apellido === undefined){  Forma 1
        apellido = "xxx";
    }*/


    //console.log(nombre + " " + apellido);

}

var obj = {

    nombre: "Juan",
    apellido: "Padilla"

}

// variable explicita 
// var nombre = "Juan";

/*
imprimir({

    nombre: "Juan",
    apellido: "Padilla"

}); //variable anonima */

imprimir(obj);

console.log(obj);

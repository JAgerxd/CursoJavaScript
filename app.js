//notacion de punto y corchete

var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Chile",
        ciudad: "Viña del Mar",
        edificio: {
            nombre: "Edificio Principal",
            telefono: "2222-3333"
        }
    }
};

var campo = "edad";


console.log(persona[campo]);
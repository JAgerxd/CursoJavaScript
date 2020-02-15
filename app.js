// palabra reservada new

function Persona() {

    this.nombre = "Juan",
        this.apellido = "Mendoza",
        this.edad = 30;

    //        console.log("Paso por aqui");

    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido + " (" + this.edad + ")";
    }
}

var juan = new Persona();

console.log(juan);
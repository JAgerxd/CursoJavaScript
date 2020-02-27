// Funciones typeof o instanceof

function identifica(param) {
    //console.log(typeof param );
    /*if (typeof param == "function") {
        param();
    } else {
        console.log(param);
    }

     */
    console.log(param instanceof Persona);
    console.log(typeof param);
}

function Persona() {
    this.nombre = "Fernando";
    this.edad = 30;

}

var fernando = new Persona();

identifica(fernando);






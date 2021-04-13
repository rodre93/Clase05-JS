function Persona(pNombre, pApellido, pEdad, pEmail = "") {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
    this.email = pEmail;

    this.hablar = function () {
        console.log("Hola soy " + this.nombre);
    }
}
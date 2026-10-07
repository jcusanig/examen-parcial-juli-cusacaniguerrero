class NodoFoto {
    constructor(nombre) {
        this.nombre = nombre;
        this.siguiente = null;
        this.anterior = null;
    }
}

class Galeria {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.actual = null;
    }


    agregarFoto(nombre) {
        const nuevoNodo = new NodoFoto(nombre);

        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
            this.actual = nuevoNodo;
            return;
        }

        this.cola.siguiente = nuevoNodo;
        nuevoNodo.anterior = this.cola;
        this.cola = nuevoNodo;
    }

    siguienteFoto() {
        if (this.actual && this.actual.siguiente !== null) {
            this.actual = this.actual.siguiente;
            console.log(`Avanzando a: ${this.actual.nombre}`);
        } else {
            console.log("Estás en la última foto. No hay siguiente.");
        }
    }


    fotoAnterior() {
        if (this.actual && this.actual.anterior !== null) {
            this.actual = this.actual.anterior;
            console.log(`Retrocediendo a: ${this.actual.nombre}`);
        } else {
            console.log("Estás en la primera foto. No hay anterior.");
        }
    }


    verFotoActual() {
        if (this.actual !== null) {
            console.log(`Foto actual: ${this.actual.nombre}`);
        } else {
            console.log("La galería está vacía.");
        }
    }
}


const miGaleria = new Galeria();

miGaleria.agregarFoto("foto1.jpg");
miGaleria.agregarFoto("foto2.jpg");
miGaleria.agregarFoto("foto3.jpg");

miGaleria.verFotoActual();
miGaleria.siguienteFoto();
miGaleria.siguienteFoto();
miGaleria.siguienteFoto();
miGaleria.fotoAnterior();
miGaleria.fotoAnterior();
miGaleria.fotoAnterior();
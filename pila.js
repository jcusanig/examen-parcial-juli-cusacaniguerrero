class Pila {
    constructor() {
        this.elementos = [];
    }

    apilar(dato) {
        this.elementos.push(dato);
        return `Dato agregado(Apilado): ${dato} -> Pila actual: [${this.elementos}]`;
    }

    desapilar() {
        if (this.estaVacia()) {
            return null;
        }
        return this.elementos.pop();
    }

    verTope() {
        if (this.estaVacia()) {
            return null;
        }
        return this.elementos[this.elementos.length - 1];
    }

    estaVacia() {
        return this.elementos.length === 0;
    }

    imprimir() {
        return this.elementos;
    }
}

class EditorTexto {
    constructor() {
        this.historialAcciones = new Pila();
    }

    escribirAccion(accion) {
        this.historialAcciones.apilar(accion);
        console.log(`Acción realizada: "${accion}"`);
    }

    deshacer() {
        if (this.historialAcciones.estaVacia()) {
            console.log("No hay acciones para deshacer.");
            return;
        }
        const accionRevertida = this.historialAcciones.desapilar();
        console.log(`[Ctrl + Z] Se revirtió la acción: "${accionRevertida}"`);
    }

    verEstadoActual() {
        if (this.historialAcciones.estaVacia()) {
            console.log("Estado actual: El editor está vacío.");
            return;
        }
        const ultimaAccion = this.historialAcciones.verTope();
        console.log(`Estado actual (cima): "${ultimaAccion}"`);
    }
}


const editor = new EditorTexto();

editor.escribirAccion("Escribir 'Hola'");
editor.escribirAccion("Escribir ' Mundo'");
editor.escribirAccion("Borrar 'Mundo'");

editor.verEstadoActual(); // Muestra: Borrar 'Mundo'

console.log("--- Presionando Ctrl + Z ---");

editor.deshacer();
editor.verEstadoActual();

editor.deshacer();
editor.deshacer();


editor.deshacer();
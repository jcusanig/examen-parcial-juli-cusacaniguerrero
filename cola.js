class NodoCliente {
    constructor(nombreCliente) {
        this.nombreCliente = nombreCliente;
        this.siguiente = null;
    }
}

class TaquillaCine {
    constructor() {
        this.cabeza = null;
    }

    llegarCliente(nombre) {
        const nuevoCliente = new NodoCliente(nombre);

        if (this.cabeza === null) {
            this.cabeza = nuevoCliente;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoCliente;
        }

        console.log(`Cliente "${nombre}" ha ingresado a la fila.`);
    }

    atenderCliente() {
        if (this.cabeza === null) {
            console.log("No hay clientes en la fila para atender.");
            return;
        }

        const atendido = this.cabeza;
        this.cabeza = this.cabeza.siguiente;
        console.log(`Atendiendo al cliente: ${atendido.nombreCliente}`);
    }

    mostrarFila() {
        if (this.cabeza === null) {
            console.log("La fila está vacía.");
            return;
        }

        let actual = this.cabeza;
        let clientesEsperando = [];

        while (actual !== null) {
            clientesEsperando.push(actual.nombreCliente);
            actual = actual.siguiente;
        }

        console.log(`Clientes en espera: ${clientesEsperando.join(" -> ")}`);
    }
}

const taquilla = new TaquillaCine();

taquilla.llegarCliente("Ana López");
taquilla.llegarCliente("Carlos Gómez");
taquilla.llegarCliente("María Rodríguez");

console.log("\n--- Estado actual de la fila ---");
taquilla.mostrarFila();

console.log("\n--- Atendiendo clientes ---");
taquilla.atenderCliente();

console.log("\n--- Estado de la fila después de la atención ---");
taquilla.mostrarFila();

console.log("\n--- Atendiendo resto de clientes ---");
taquilla.atenderCliente();
taquilla.atenderCliente();

taquilla.atenderCliente();
taquilla.mostrarFila();
class NodoABB {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function insertarABB(nodo, valor) {
    if (nodo === null) {
        return new NodoABB(valor);
    }

    if (valor < nodo.valor) {
        nodo.izquierdo = insertarABB(nodo.izquierdo, valor);
    } else if (valor > nodo.valor) {
        nodo.derecho = insertarABB(nodo.derecho, valor);
    } else {
        // Manejo de IDs duplicados
        console.log(`Aviso: El ID ${valor} ya está registrado y fue ignorado.`);
    }

    return nodo;
}

function listarIDs(nodo) {
    if (nodo !== null) {
        listarIDs(nodo.izquierdo);
        console.log(`ID Empleado: ${nodo.valor}`);
        listarIDs(nodo.derecho);
    }
}


let arbol = null;

arbol = insertarABB(arbol, 105);
arbol = insertarABB(arbol, 102);
arbol = insertarABB(arbol, 108);
arbol = insertarABB(arbol, 101);
arbol = insertarABB(arbol, 104);

arbol = insertarABB(arbol, 102);

console.log("\n--- Lista de IDs de empleados registrados ---");
listarIDs(arbol);
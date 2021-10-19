class operacionesMatematicas {
    constructor(numero1, numero2) {
        this._numero1 = numero1;
        this._numero2 = numero2;
    }

    setNumero2(numero, operacion) {
        if (operacion == 'division' && numero == 0) {
            numero = 1
        }
        this._numero2 = numero;
    }

    sumar() {
        return this._numero1 + this._numero2;
    }

    division() {
        return this._numero1 / this._numero2;
    }
}

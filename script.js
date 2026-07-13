class Parquimetro {
    constructor(valor) {
        this.valor = parseFloat(valor);
    }

    calcular() {
        if (isNaN(this.valor) || this.valor < 1.00) {
            return "Valor insuficiente.";
        }

        let tempo = 0;
        let custo = 0;

        if (this.valor >= 3.00) {
            tempo = 120;
            custo = 3.00;
        } else if (this.valor >= 1.75) {
            tempo = 60;
            custo = 1.75;
        } else {
            tempo = 30;
            custo = 1.00;
        }

        let troco = this.valor - custo;
        return `Tempo: ${tempo} min | Troco: R$ ${troco.toFixed(2)}`;
    }
}

function calcularTempo() {
    const valorInput = document.getElementById("valorinserido").value;
    const parquimetro = new Parquimetro(valorInput);
    document.getElementById("resultado").innerText = parquimetro.calcular();
}
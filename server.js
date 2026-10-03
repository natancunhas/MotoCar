class Moto {
    constructor(dados) {
        Object.assign(this, dados);
    }
}

const moto = new Moto ({
    modelo: "Harley Davidson FAT BOY 114",
    ano: 2020,
    serie: "Fat Boy",
    versao: "114",
    documentacao: "Em dia",
    ipva: "2026 Pago",
    chassi: "Válido",
    cor: "Black piano",
    ipva: "Pago 2026",
    sinistro: "N/A"
});

console.log(moto);
class Moto {
    constructor(dados) {
        Object.assign(this, dados);
    }
}

const moto = new Moto({
    modelo: "Harley Davidson FAT BOY 114",
    ano: 2020,
    serie: "Família Softail",
    versao: "Street",
    documentacao: "Doc: Em dias",
    ipva: "2026 Pago",
    chassi: "Valido",
    cor: "Black piano",
    Quilometragem: "76.900km",
});

console.log(moto);
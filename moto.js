class Moto {
    constructor(modelo, ano, serie){
        this.modelo = modelo;
        this.ano = ano;
        this.serie = serie;
    }
}
const moto = new Moto("Honda 160cc", 2020, "Urban");
console.log(moto.modelo);
console.log(moto.ano);   
console.log(moto.serie);   
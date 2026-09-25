        class Moto {
            constructor(modelo, ano, serie, versao, documentacao){
                this.modelo = modelo;
                this.ano = ano;
                this.serie = serie; 
                this.versao = versao; 
                this.documentacao = documentacao;
            }
        }
        const moto = new Moto("Honda 160cc", 2020, "Urban", "Bigtrail", "Doc; Em dias");
        console.log(moto.modelo);
        console.log(moto.ano);   
        console.log(moto.serie); 
        console.log(moto.versao); 
        console.log(moto.documentacao); 
        
        
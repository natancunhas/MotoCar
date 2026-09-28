        class Moto {
            constructor(modelo, ano, serie, versao, documentacao, ipva, chassi, cor){
                this.modelo = modelo;
                this.ano = ano;
                this.serie = serie; 
                this.versao = versao; 
                this.documentacao = documentacao;
                this.ipva = ipva;
                this.chassi = chassi; 
                this.cor = cor; 

            }
        }
        const moto = new Moto("Honda 160cc", 2020, "Urban", "Bigtrail", "Doc; Em dias", "2026 Pago", "Valido", "Vermelho Mustang");
        console.log(moto.modelo);
        console.log(moto.ano);   
        console.log(moto.serie); 
        console.log(moto.versao); 
        console.log(moto.documentacao); 
        console.log(moto.ipva);
        console.log(moto.chassi);
        console.log(moto.cor);
        
        
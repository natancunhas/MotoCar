        class Moto {
            constructor(modelo, ano, serie, versao){
                this.modelo = modelo;
                this.ano = ano;
                this.serie = serie;
                this.versao = versao; 
            }
        }
        const moto = new Moto("Honda 160cc", 2020, "Urban", "Bigtrail");
        console.log(moto.modelo);
        console.log(moto.ano);   
        console.log(moto.serie); 
        console.log(moto.versao);  
        
        
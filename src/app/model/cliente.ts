export class Cliente{

    id : string;
    nome : string;
    telefone : string;
    email : string;
    cep : string;
    endereco : string;

    constructor(){   
    }

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.telefone = obj.telefone;
        this.email = obj.email;
        this.cep = obj.cep;
        this.endereco = obj.endereco;
    }
}
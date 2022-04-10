interface IClientesRequest{
    name: string;
    telefone: string;
    email: string;
    senha: string;
    cpf: string;
    endereco: string;
    cidade: string;
    estado: string;
    bairro: string;
}

class CreateClientesService {
    async execute({ name, telefone, email, senha, cpf, endereco, cidade, estado, bairro }: IClientesRequest) {

      var vclientes= {
        name:"Nome 1", telefone:"47154444", email:"f@f.com", senha:"1545",
        cpf:"28710850805", endereco:"av bento", cidade:"Poa", estado:"SP", bairro:"kemel"      
    }

      return vclientes;
    }
  }

  export { CreateClientesService };
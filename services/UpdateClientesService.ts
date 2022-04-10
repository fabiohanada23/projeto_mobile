interface IClientesRequest {
    id: string;
    name: string,
    telefone: string,
    email: string,
    senha: string,
    cpf: string,
    endereco: string,
    cidade: string,
    estado: string,
    bairro: string
    
  }
  class UpdateClientesService {
    async execute({ id, name, telefone, email, senha, cpf, endereco, cidade, estado, bairro }: IClientesRequest) {

       var vclientes = {
        name:"Nome 1", telefone:"45681235", email:"a@a.com", senha:"1353", cpf:"28710850805",
        endereco:"av. bento", cidade:"poa", estado:"sp", bairro:"kemel"  }
      return vclientes;
    }
  }
  export { UpdateClientesService };
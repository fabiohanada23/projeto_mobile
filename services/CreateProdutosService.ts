interface IProdutosRequest{
    name: string;
    descricao: string;
    preco: string;
    id_categoria: string;
}

class CreateProdutosService {
    async execute({ name, descricao, preco, id_categoria }: IProdutosRequest) {

      var vprodutos = {
        name:"Nome 1", decricao:"ferramenta", preco:"562", id_categoria:"12"      
    }

      return vprodutos;
    }
  }

  export { CreateProdutosService };
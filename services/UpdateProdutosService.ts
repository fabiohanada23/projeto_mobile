interface IProdutosRequest {
    id: string;
    name: string,
    descricao: string,
    preco: string,
    id_categoria: string,
  }
  class UpdateProdutosService {
    async execute({ id, name, descricao, preco, id_categoria }: IProdutosRequest) {
      
       var vprodutos = {
        name:"Nome 1", descricao:"ferramenta", preco:"4545", id_categoria:"79"      }
      return vprodutos;
    }
  }
  export { UpdateProdutosService };
import { classToPlain } from "class-transformer";

class ListProdutosService {
  async execute() {

    const produtosret = [{
        "id": "1",
        "nome": "Usario 01",
        "descricao": "ferramenta",
        "preco": "588",
        "id_categoria": "05",
    },

    {
        "id": "2",
        "nome": "Usario 02",
        "descricao": "ferramenta",
        "preco": "583",
        "id_categoria": "02",    } ]
    return classToPlain(produtosret)
  }
}

export { ListProdutosService };
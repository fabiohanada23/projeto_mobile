import { classToPlain } from "class-transformer";

class ListVendasService {
  async execute() {

    const vendasret = [{
        "id": "1",
        "id_produto": "4545",
        "id_cliente": "454",
        "quantidade": "4154",
        "total_bruto": "4564",
        "desconto": "456",
        "valor_total": "7987"    
    },

    {
      "id": "5",
      "id_produto": "4545",
      "id_cliente": "454",
      "quantidade": "4154",
      "total_bruto": "4564",
      "desconto": "456",
      "valor_total": "7987"    } ]
    return classToPlain(vendasret)
  }
}

export { ListVendasService };
import { classToPlain } from "class-transformer";

class ListCategoriasService {
  async execute() {

    const categoriasret = [{
        "id": "1",
        "nome": "Usario 01",
        "descricao": "aparelho"   
    },

    {
        "id": "2",
        "nome": "Usario 02",
        "descricao": "aparelho"    } ]
    return classToPlain(categoriasret)
  }
}

export { ListCategoriasService };
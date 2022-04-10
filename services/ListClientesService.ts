import { classToPlain } from "class-transformer";

class ListClientesService {
  async execute() {

    const clientesret = [{
        "id": "1",
        "nome": "Usario 01",
        "telefone": "45466565",
        "email": "a@a.com",
        "senha": "root",
        "cpf": "28710850805",
        "endereco": "av. bento",
        "cidade": "poa",
        "estado": "sp",
        "bairro": "kemel"    
    },

    {
      "id": "2",
      "nome": "Usario 02",
      "telefone": "45466565",
      "email": "a@a.com",
      "senha": "root",
      "cpf": "28710850805",
      "endereco": "av. bento",
      "cidade": "poa",
      "estado": "sp",
      "bairro": "kemel"    } ]
    return classToPlain(clientesret)
  }
}

export { ListClientesService };
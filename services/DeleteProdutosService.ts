import { classToPlain } from "class-transformer";
import { json } from "express";
interface IProdutosDelete {
    id: string;
}
class DeleteProdutosService {
  async execute({id}:IProdutosDelete) {
      console.log(id);
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"      }
      return messagmsgeDelete;
  }
}
export { DeleteProdutosService };
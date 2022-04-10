import { classToPlain } from "class-transformer";
import { json } from "express";
interface ICategoriasDelete {
    id: string;
}
class DeleteCategoriasService {
  async execute({id}:ICategoriasDelete) {
      console.log(id);
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"      }
      return messagmsgeDelete;
  }
}
export { DeleteCategoriasService };
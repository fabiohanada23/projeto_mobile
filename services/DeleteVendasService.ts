import { classToPlain } from "class-transformer";
import { json } from "express";
interface IVendasDelete {
    id: string;
}
class DeleteVendasService {
  async execute({id}:IVendasDelete) {
      console.log(id);
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"      }
      return messagmsgeDelete;
  }
}
export { DeleteVendasService };
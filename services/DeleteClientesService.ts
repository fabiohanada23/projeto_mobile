import { classToPlain } from "class-transformer";
import { json } from "express";
interface IClientesDelete {
    id: string;
}
class DeleteClientesService {
  async execute({id}:IClientesDelete) {
      console.log(id);
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"      }
      return messagmsgeDelete;
  }
}
export { DeleteClientesService };
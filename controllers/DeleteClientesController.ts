import { Request, Response } from "express";
import { DeleteClientesService } from "../services/DeleteClientesService";
class DeleteClientesController {
  async handle(request: Request, response: Response) {
    const deleteClientesService = new DeleteClientesService();
    const id= request.params.id;
    const clientes = await deleteClientesService.execute({id});
    return response.json(clientes);
  }
}
export { DeleteClientesController };
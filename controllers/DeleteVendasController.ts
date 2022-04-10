import { Request, Response } from "express";
import { DeleteVendasService } from "../services/DeleteVendasService";
class DeleteVendasController {
  async handle(request: Request, response: Response) {
    const deleteVendasService = new DeleteVendasService();
    const id= request.params.id;
    const vendas = await deleteVendasService.execute({id});
    return response.json(vendas);
  }
}
export { DeleteVendasController };
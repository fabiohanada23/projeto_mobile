import { Request, Response } from "express";
import { DeleteProdutosService } from "../services/DeleteProdutosService";
class DeleteProdutosController {
  async handle(request: Request, response: Response) {
    const deleteProdutosService = new DeleteProdutosService();
    const id= request.params.id;
    const produtos = await deleteProdutosService.execute({id});
    return response.json(produtos);
  }
}
export { DeleteProdutosController };
import { Request, Response } from "express";
import { ListProdutosService } from "../services/ListProdutosService";

class ListProdutosController {
  async handle(request: Request, response: Response) {
    const listProdutosService = new ListProdutosService();
    const produtos = await listProdutosService.execute();
    return response.json(produtos);
  }
}

export { ListProdutosController };
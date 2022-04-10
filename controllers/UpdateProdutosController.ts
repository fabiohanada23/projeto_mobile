import { Request, Response } from "express";
import { UpdateProdutosService } from "../services/UpdateProdutosService";

class UpdateProdutosController {
  async handle(request: Request, response: Response) {
    const { id, name, descricao, preco, id_categoria } = request.body;
    const updateProdutosService = new UpdateProdutosService();
    const produtos = await updateProdutosService.execute({id,
      name,
      descricao,
      preco,
      id_categoria,
    });
    return response.json(produtos);
  }
}
export { UpdateProdutosController };
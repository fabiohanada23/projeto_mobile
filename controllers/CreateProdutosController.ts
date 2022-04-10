import { Request, Response } from "express";
import { CreateProdutosService } from "../services/CreateProdutosService";

class CreateProdutosController {

    async handle(request: Request, response: Response) {
      const { name, descricao, preco, id_categoria } = request.body;

      const createProdutosService = new CreateProdutosService();

      const produtos = await createProdutosService.execute({
        name,
        descricao,
        preco,
        id_categoria,
      });

      return response.json(produtos);
    }
  }

  export { CreateProdutosController };
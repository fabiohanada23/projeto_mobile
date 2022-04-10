import { Request, Response } from "express";
import { CreateCategoriasService } from "../services/CreateCategoriasService";

class CreateCategoriasController {

    async handle(request: Request, response: Response) {
      const { name, descricao } = request.body;

      const createCategoriasService = new CreateCategoriasService();

      const categorias = await createCategoriasService.execute({
        name,
        descricao,
      });

      return response.json(categorias);
    }
  }

  export { CreateCategoriasController };
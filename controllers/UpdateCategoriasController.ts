import { Request, Response } from "express";
import { UpdateCategoriasService } from "../services/UpdateCategoriasService";

class UpdateCategoriasController {
  async handle(request: Request, response: Response) {
    const { id, descricao } = request.body;
    const updateCategoriasService = new UpdateCategoriasService();
    const categoria = await updateCategoriasService.execute({id,
      descricao,
    });
    return response.json(categoria);
  }
}
export { UpdateCategoriasController };
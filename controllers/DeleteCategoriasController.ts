import { Request, Response } from "express";
import { DeleteCategoriasService } from "../services/DeleteCategoriasService";
class DeleteCategoriasController {
  async handle(request: Request, response: Response) {
    const deleteCategoriasService = new DeleteCategoriasService();
    const id= request.params.id;
    const categorias = await deleteCategoriasService.execute({id});
    return response.json(categorias);
  }
}
export { DeleteCategoriasController };
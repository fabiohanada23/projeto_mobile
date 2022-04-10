import { Request, Response } from "express";
import { ListCategoriasService } from "../services/ListCategoriasService";

class ListCategoriasController {
  async handle(request: Request, response: Response) {
    const listCategoriasService = new ListCategoriasService();
    const categorias = await listCategoriasService.execute();
    return response.json(categorias);
  }
}

export { ListCategoriasController };
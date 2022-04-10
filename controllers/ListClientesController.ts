import { Request, Response } from "express";
import { ListClientesService } from "../services/ListClientesService";

class ListClientesController {
  async handle(request: Request, response: Response) {
    const listClientessService = new ListClientesService();
    const clientes = await listClientessService.execute();
    return response.json(clientes);
  }
}

export { ListClientesController };
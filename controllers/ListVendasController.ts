import { Request, Response } from "express";
import { ListVendasService } from "../services/ListVendasService";

class ListVendasController {
  async handle(request: Request, response: Response) {
    const listVendasService = new ListVendasService();
    const vendass = await listVendasService.execute();
    return response.json(vendass);
  }
}

export { ListVendasController };
import { Request, Response } from "express";
import { UpdateVendasService } from "../services/UpdateVendasService";

class UpdateVendasController {
  async handle(request: Request, response: Response) {
    const { id, id_produto, id_cliente, quantidade, total_bruto, desconto, valor_total } = request.body;
    const updateVendasService = new UpdateVendasService();
    const vendas = await updateVendasService.execute({id,
      id_produto,
      id_cliente,
      quantidade,
      total_bruto,
      desconto,
      valor_total
    });
    return response.json(vendas);
  }
}
export { UpdateVendasController };
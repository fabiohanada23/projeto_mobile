import { Request, Response } from "express";
import { CreateVendasService } from "../services/CreateVendasService";

class CreateVendasController {

    async handle(request: Request, response: Response) {
      const { id_produto, id_cliente, quantidade, total_bruto, desconto, valor_total } = request.body;

      const createVendasService = new CreateVendasService();

      const vendas = await createVendasService.execute({
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

  export { CreateVendasController };
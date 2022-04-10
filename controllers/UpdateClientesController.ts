import { Request, Response } from "express";
import { UpdateClientesService } from "../services/UpdateClientesService";

class UpdateClientesController {
  async handle(request: Request, response: Response) {
    const { id, name, telefone, email, senha, cpf, endereco, cidade, estado, bairro } = request.body;
    const updateClientesService = new UpdateClientesService();
    const clientes = await updateClientesService.execute({id,
      name,
      telefone,
      email,
      senha,
      cpf,
      endereco,
      cidade,
      estado,
      bairro
    });
    return response.json(clientes);
  }
}
export { UpdateClientesController };
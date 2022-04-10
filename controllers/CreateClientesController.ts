import { Request, Response } from "express";
import { CreateClientesService } from "../services/CreateClientesService";

class CreateClientesController {

    async handle(request: Request, response: Response) {
      const { name, telefone, email, senha, cpf, endereco, cidade, estado, bairro } = request.body;

      const createClientesService = new CreateClientesService();

      const clientes = await createClientesService.execute({
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

  export { CreateClientesController };
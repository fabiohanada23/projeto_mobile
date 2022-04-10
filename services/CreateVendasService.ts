interface IVendasRequest{
    id_produto: string;
    id_cliente: string;
    quantidade: string;
    total_bruto: string;
    desconto: string;
    valor_total: string;
}

class CreateVendasService {
    async execute({ id_produto, id_cliente, quantidade, total_bruto, desconto, valor_total }: IVendasRequest) {

      var vvendas = {
        id_produto:"255", id_cliente:"454", quantidade:"78", total_bruto:"124", desconto:"458", valor_total:"464"      
    }

      return vvendas;
    }
  }

  export { CreateVendasService };
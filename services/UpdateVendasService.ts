interface IVendasRequest {
    id: string;
    id_produto: string;
    id_cliente: string;
    quantidade: string;
    total_bruto: string;
    desconto: string;
    valor_total: string;
  }
  class UpdateVendasService {
    async execute({ id, id_produto, id_cliente, quantidade, total_bruto, desconto, valor_total }: IVendasRequest) {
      
       var vvendas = {
        id_produto:"4646", id_cliente:"46", quantidade:"479", total_bruto:"464", desconto:"7979", valor_total:"797" }
      return vvendas;
    }
  }
  export { UpdateVendasService };
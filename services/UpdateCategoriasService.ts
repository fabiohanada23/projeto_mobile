interface ICategoriasRequest {
    id: string;
    descricao: string;
  }
  class UpdateCategoriasService {
    async execute({ id, descricao }: ICategoriasRequest) {
      
       var vdescricao = {
        name:"Nome 1", descricao:"aparelho"     }
      return vdescricao;
    }
  }
  export { UpdateCategoriasService };
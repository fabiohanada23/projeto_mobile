interface IUserRequest{
    name: string;
    descricao: string;
}

class CreateCategoriasService {
    async execute({ name, descricao }: IUserRequest) {

      // if (!email) {
      //   throw new Error("Email incorrect");
      // }

      var vdescricao = {
        name:"Nome 1", descricao:"aparelho"      
    }

      return vdescricao;
    }
  }

  export { CreateCategoriasService };
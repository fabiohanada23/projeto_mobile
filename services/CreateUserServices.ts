import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../src/repositories/UsersRepositories";
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
 }
 class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
      const usersRepository = getCustomRepository(UsersRepositories);
      if (!email) {
        throw new Error("Email obrigatorio");
      }
      if (!name) {
        throw new Error("Nome obrigatorio");
      }      
      if (!password) {
        throw new Error("Password Obrigatorio");
      }
      const userAlreadyExists = await usersRepository.findOne({
        email,
      });
      if (userAlreadyExists) {
        throw new Error("User already exists");        
      }
      const passwordHash = await hash(password, 8); 
      const user = usersRepository.create({
        name,
        email,
        admin,
        password: passwordHash,
      });
      await usersRepository.save(user);
      return user;
    }
  }
  export { CreateUserService };
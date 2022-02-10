import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  usuario_usr: string;
  senha_usr: string;
  nome_usr: string;
  cargo_usr: string;
  email_usr?: string;
  admin_usr?: boolean;
}

class CreateUserService {
  async execute({
    usuario_usr,
    senha_usr,
    nome_usr,
    cargo_usr,
    email_usr,
    admin_usr = false,
  }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    // tratativa de erros (Front ja faz isso)
    if (!usuario_usr) {
      throw new Error("Usuário inválido");
    }
    if (!senha_usr) {
      throw new Error("Senha inválida");
    }
    if (!nome_usr) {
      throw new Error("Nome inválido");
    }
    if (!email_usr) {
      throw new Error("Email inválido");
    }

    const userAlreadyExists = await usersRepository.findOne({
      usuario_usr,
    });

    if (userAlreadyExists) {
      throw new Error("Usuario já existe");
    }

    const user = usersRepository.create({
      usuario_usr,
      senha_usr,
      nome_usr,
      cargo_usr,
      email_usr,
      admin_usr,
    });

    await usersRepository.save(user);

    return user;
  }
}
export { CreateUserService };

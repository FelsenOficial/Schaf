import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";
interface IAuthenticateRequest {
  usuario_usr: string;
  senha_usr: string;
}

class AuthenticateUserService {
  async execute({ usuario_usr, senha_usr }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      usuario_usr,
    });

    if (!user) {
      throw new Error("Usuário inválido");
    }

    if (senha_usr !== user.senha_usr) {
      throw new Error("Senha inválida");
    }

    const token = sign(
      {
        usuario: user.usuario_usr,
      },
      "7814e0e7860eb9de44268b04e7f6b393",
      {
        subject: user.id_usr,
        expiresIn: "1d",
      }
    );
    return token;
  }
}

export { AuthenticateUserService };

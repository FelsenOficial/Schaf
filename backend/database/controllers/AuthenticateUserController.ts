import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { usuario_usr, senha_usr } = request.body;

    const authenticateUserService = new AuthenticateUserService();
    const token = await authenticateUserService.execute({
      usuario_usr,
      senha_usr,
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };

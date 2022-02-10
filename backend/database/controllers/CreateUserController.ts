import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      usuario_usr,
      senha_usr,
      nome_usr,
      cargo_usr,
      email_usr,
      admin_usr,
    } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      usuario_usr,
      senha_usr,
      nome_usr,
      cargo_usr,
      email_usr,
      admin_usr,
    });
    return response.json(user);
  }
}
export { CreateUserController };

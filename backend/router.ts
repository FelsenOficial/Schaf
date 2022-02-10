import { Router } from "express";
import { AuthenticateUserController } from "./database/controllers/AuthenticateUserController";
import { CreateUserController } from "./database/controllers/CreateUserController";
import { ensureAdmin } from "./database/middleware/ensureAdmin";
import { ensureAuthenticated } from "./database/middleware/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
router.post(
  "/register",
  ensureAuthenticated,
  ensureAdmin,
  createUserController.handle
);
router.post("/login", authenticateUserController.handle);

export { router };

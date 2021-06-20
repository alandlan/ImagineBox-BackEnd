import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UserController } from "../modules/controllers/UserController";

const usersRouter = Router();

const userController = new UserController();

usersRouter.get("/", ensureAuthenticated, ensureAdmin, userController.FindAll);

export { usersRouter };

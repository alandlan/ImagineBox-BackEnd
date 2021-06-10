import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UserController } from "../modules/controllers/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.get("/GetByEmail", userController.FindByEmail);

userRouter.post("/", ensureAuthenticated, ensureAdmin, userController.Create);

export { userRouter };

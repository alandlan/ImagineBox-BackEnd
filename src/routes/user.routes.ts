import { Router } from "express";

import { UserController } from "../modules/controllers/UserController";
import { authenticateRouter } from "./authenticate.routes";

const userRouter = Router();

const userController = new UserController();

userRouter.get("/GetByEmail", authenticateRouter, userController.FindByEmail);

userRouter.post("/", userController.Create);

export { userRouter };

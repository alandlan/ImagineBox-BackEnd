import { Router } from "express";

import { UserController } from "../modules/controllers/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.get("/GetByEmail", userController.FindByEmail);

userRouter.post("/", userController.Create);

export { userRouter };

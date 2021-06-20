import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UserController } from "../modules/controllers/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/", userController.Create);
userRouter.get("/:id", ensureAuthenticated, userController.FindById);
userRouter.get(
  "/GetByEmail",
  ensureAuthenticated,
  ensureAdmin,
  userController.FindByEmail
);
userRouter.put("/", ensureAuthenticated, userController.Update);

export { userRouter };

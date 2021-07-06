import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UserAddressController } from "../modules/controllers/UserAddressController";

const userAddressRoutes = Router();

const userAddressController = new UserAddressController();

userAddressRoutes.post("/", ensureAuthenticated, userAddressController.Create);

userAddressRoutes.get(
  "/",
  ensureAuthenticated,
  userAddressController.FindByUserId
);

export { userAddressRoutes };

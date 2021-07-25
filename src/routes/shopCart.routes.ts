import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ShopCartController } from "../modules/controllers/ShopCartController";

const shopCartRouter = Router();

const shopCartController = new ShopCartController();

shopCartRouter.post(
  "/AddItem",
  ensureAuthenticated,
  shopCartController.AddItem
);

shopCartRouter.get("/", ensureAuthenticated, shopCartController.FindByUserId);

export { shopCartRouter };

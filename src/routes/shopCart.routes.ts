import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ShopCartController } from "../modules/controllers/ShopCartController";

const shopCartRouter = Router();

const shopCartController = new ShopCartController();

shopCartRouter.post(
  "/AddItem/:Id",
  ensureAuthenticated,
  shopCartController.AddItem
);

shopCartRouter.post(
  "/RemoveItem/:Id",
  ensureAuthenticated,
  shopCartController.RemoveItem
);

shopCartRouter.get("/", ensureAuthenticated, shopCartController.FindByUserId);

shopCartRouter.delete("/Reset", ensureAuthenticated, shopCartController.Reset);

export { shopCartRouter };

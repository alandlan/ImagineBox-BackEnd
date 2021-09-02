import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { OrderController } from "../modules/controllers/OrderController";

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.post(
  "/CloseOrder",
  ensureAuthenticated,
  orderController.CloseOrder
);

export { orderRouter };

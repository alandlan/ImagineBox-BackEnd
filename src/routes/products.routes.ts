import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ProductsController } from "../modules/controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get("/", ensureAuthenticated, productsController.findAll);

export { productsRouter };

import { Router } from "express";

import { ProductsController } from "../modules/controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get("/", productsController.FindAll);

export { productsRouter };

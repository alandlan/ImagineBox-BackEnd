import { Router } from "express";

import { ProductController } from "../modules/controllers/ProductController";

const productRouter = Router();

const productController = new ProductController();

productRouter.get("/", productController.findAll);

productRouter.get("/name", productController.findByName);

productRouter.post("/", productController.Create);

export { productRouter };

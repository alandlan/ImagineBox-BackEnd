import { Router } from "express";

import { ProductController } from "../modules/controllers/ProductController";

const productRouter = Router();

const productController = new ProductController();

productRouter.get("/", (request, response) => {
  return response.json({ messsage: "Route GET Ok" });
});

productRouter.post("/", productController.Create);

export { productRouter };

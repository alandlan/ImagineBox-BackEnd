import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ProductController } from "../modules/controllers/ProductController";

const productRouter = Router();
const uploadProductImage = multer(uploadConfig.upload("./tmp/product"));

const productController = new ProductController();

productRouter.get("/name", productController.findByName);

productRouter.post("/", productController.Create);

productRouter.patch(
  "/image",
  // ensureAuthenticated,
  uploadProductImage.single("product_file"),
  productController.AddImage
);

export { productRouter };

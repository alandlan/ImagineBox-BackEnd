import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ProductController } from "../modules/controllers/ProductController";

const productRouter = Router();
const uploadProductImage = multer(uploadConfig.upload("./tmp/product"));

const productController = new ProductController();

productRouter.get("/name", productController.FindByName);

productRouter.get("/:id", productController.FindById);

productRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  productController.Create
);

productRouter.put(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  productController.Update
);

productRouter.patch(
  "/image",
  ensureAuthenticated,
  ensureAdmin,
  uploadProductImage.single("product_file"),
  productController.AddImage
);

export { productRouter };

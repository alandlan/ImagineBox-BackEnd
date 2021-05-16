import { Router } from "express";

import { productRouter } from "./product.routes";
import { productsRouter } from "./products.routes";

const router = Router();

router.use("/product", productRouter);
router.use("/products", productsRouter);

export { router };

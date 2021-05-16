import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { productRouter } from "./product.routes";
import { productsRouter } from "./products.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.use("/product", productRouter);
router.use("/products", productsRouter);
router.use("/user", userRouter);
router.use(authenticateRouter);

export { router };

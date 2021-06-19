import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { categoryRouter } from "./category.routes";
import { productRouter } from "./product.routes";
import { productsRouter } from "./products.routes";
import { userRouter } from "./user.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/user", userRouter);
router.use("/users", usersRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/products", productsRouter);
router.use(authenticateRouter);

export { router };

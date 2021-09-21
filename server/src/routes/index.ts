import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { catalogueRouter } from "./catalogue.routes";
import { categoryRouter } from "./category.routes";
import { freightRouter } from "./freight.routes";
import { orderRouter } from "./order.routes";
import { productRouter } from "./product.routes";
import { productsRouter } from "./products.routes";
import { shopCartRouter } from "./shopCart.routes";
import { userRouter } from "./user.routes";
import { userAddressRoutes } from "./userAddress.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/user", userRouter);
router.use("/users", usersRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/products", productsRouter);
router.use("/catalogue", catalogueRouter);
router.use("/useraddress", userAddressRoutes);
router.use("/shopCart", shopCartRouter);
router.use("/order", orderRouter);
router.use("/freight", freightRouter);
router.use(authenticateRouter);

export { router };

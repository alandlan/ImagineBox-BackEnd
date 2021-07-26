import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CategoryController } from "../modules/controllers/CategoryController";

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  categoryController.Create
);

categoryRouter.put(
  "/:Id",
  ensureAuthenticated,
  ensureAdmin,
  categoryController.Update
);

categoryRouter.get("/:Id", categoryController.FindById);

categoryRouter.get("/", categoryController.FindByName);

export { categoryRouter };

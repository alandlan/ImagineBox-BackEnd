import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CatalogueController } from "../modules/controllers/CatalogueController";

const catalogueRouter = Router();

const catalogueController = new CatalogueController();

catalogueRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  catalogueController.Create
);

catalogueRouter.get(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  catalogueController.FindByName
);

export { catalogueRouter };

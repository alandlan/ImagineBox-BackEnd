import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { FreightController } from "../modules/controllers/FreightController";

const freightRouter = Router();
const freightController = new FreightController();

freightRouter.get("/:Cep", ensureAuthenticated, freightController.FindCep);

export { freightRouter };

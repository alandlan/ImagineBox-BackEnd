import { Router } from "express";

import { AuthenticateController } from "../modules/controllers/AuthenticateController";

const authenticateRouter = Router();

const authenticateController = new AuthenticateController();

authenticateRouter.post("/sessions", authenticateController.Authenticate);

export { authenticateRouter };

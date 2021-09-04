// eslint-disable-next-line import-helpers/order-imports
// eslint-disable-next-line import/no-extraneous-dependencies
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
// eslint-disable-next-line import-helpers/order-imports
import swaggerUi from "swagger-ui-express";

import "./shared/container";
// eslint-disable-next-line import-helpers/order-imports
import cors from "cors";

import createConnection from "./database";
import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

createConnection();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response
      .status(500)
      .json({ error: `Internal Server Error - ${err.message}` });
  }
);

app.listen("3333", () => console.log("Server is running!"));

import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/IDateProvider/Implementations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

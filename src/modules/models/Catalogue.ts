import { v4 as uuidV4 } from "uuid";

class Catalogue {
  Id!: string;

  Name!: string;

  Description!: string;

  IsActive!: boolean;

  Created_at!: Date;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
      this.IsActive = false;
    }
  }
}

export { Catalogue };

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("Catalogue")
class Catalogue {
  @PrimaryColumn()
  Id!: string;

  @Column()
  Name!: string;

  @Column()
  Description!: string;

  @Column()
  IsActive!: boolean;

  @CreateDateColumn()
  Created_at!: Date;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
      this.IsActive = false;
    }
  }
}

export { Catalogue };

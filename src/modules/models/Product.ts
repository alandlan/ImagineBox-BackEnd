import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("Product")
class Product {
  @PrimaryColumn()
  Id!: string;

  @Column()
  Name!: string;

  @Column()
  Description!: string;

  @Column()
  Price!: number;

  @Column()
  Img?: string;

  @Column()
  IsActive!: boolean;

  @CreateDateColumn()
  Created_at!: Date;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }

    if (!this.IsActive) {
      this.IsActive = false;
    }
  }
}

export { Product };

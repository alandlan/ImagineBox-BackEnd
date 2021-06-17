import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Category } from "./Category";

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

  @ManyToOne(() => Category)
  @JoinColumn({ name: "CategoryId" })
  Category!: Category;

  @Column()
  CategoryId!: string;

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

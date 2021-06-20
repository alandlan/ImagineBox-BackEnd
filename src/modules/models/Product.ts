import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Catalogue } from "./Catalogue";
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

  @ManyToMany(() => Catalogue, (catalogue) => catalogue.Products)
  @JoinTable({
    name: "CatalogueProduct",
    joinColumns: [{ name: "ProductId", referencedColumnName: "Id" }],
    inverseJoinColumns: [{ name: "CatalogueId" }],
  })
  Catalogues!: Catalogue[];

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

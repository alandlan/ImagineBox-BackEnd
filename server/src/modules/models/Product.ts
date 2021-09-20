import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Catalogue } from "./Catalogue";
import { Category } from "./Category";
import { ShopItemCart } from "./ShopItemCart";

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
  Weight!: string;

  @Column()
  Height!: string;

  @Column()
  Width!: string;

  @Column()
  Length!: string;

  @Column()
  Format!: string;

  @Column()
  Diameter!: string;

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

  @OneToOne(() => ShopItemCart, (ShopItemCart) => ShopItemCart.Product)
  ShopItemCart!: ShopItemCart;

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

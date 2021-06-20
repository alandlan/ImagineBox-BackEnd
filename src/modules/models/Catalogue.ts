import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Product } from "./Product";

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

  @ManyToMany(() => Product, (product) => product.Catalogues)
  @JoinTable({
    name: "CatalogueProduct",
    joinColumns: [{ name: "CatalogueId", referencedColumnName: "Id" }],
    inverseJoinColumns: [{ name: "ProductId" }],
  })
  Products!: Product[];

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
      this.IsActive = false;
    }
  }
}

export { Catalogue };

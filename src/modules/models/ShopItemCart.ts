import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Product } from "./Product";
import { ShopCart } from "./ShopCart";

@Entity("ShopItemCart")
class ShopItemCart {
  @PrimaryColumn()
  Id!: string;

  @Column()
  ShopCartId!: string;

  @Column()
  ProductId!: string;

  @Column()
  Quantity!: number;

  @CreateDateColumn()
  Created_at!: Date;

  @ManyToOne(() => ShopCart, (ShopCart) => ShopCart.ItensCart)
  @JoinColumn({ name: "ShopCartId" })
  ShopCart!: ShopCart;

  @OneToOne(() => Product, (Product) => Product.ShopItemCart)
  @JoinColumn({ name: "ProductId" })
  Product!: Product;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { ShopItemCart };

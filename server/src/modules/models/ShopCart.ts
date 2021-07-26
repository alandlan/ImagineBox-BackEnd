import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { ShopItemCart } from "./ShopItemCart";
import { User } from "./User";

@Entity("ShopCart")
class ShopCart {
  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }

  @PrimaryColumn()
  Id!: string;

  @Column()
  UserId!: string;

  Total!: number;

  @OneToOne(() => User)
  User!: string;

  @OneToMany(() => ShopItemCart, (ShopItemCart) => ShopItemCart.ShopCart)
  // @JoinColumn({ name: "ShopItemCart" })
  ItensCart!: ShopItemCart[];
}

export { ShopCart };

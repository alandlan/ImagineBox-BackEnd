import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("ShopItemCart")
class ShopItemCart {
  @PrimaryColumn()
  Id!: string;

  @Column()
  ShopCart!: string;

  @Column()
  UserId!: string;

  @Column()
  ProductId!: string;

  @Column()
  Quantity!: number;

  @CreateDateColumn()
  Created_at!: Date;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { ShopItemCart };

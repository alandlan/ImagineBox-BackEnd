import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

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

  @OneToOne(() => User)
  User!: string;
}

export { ShopCart };

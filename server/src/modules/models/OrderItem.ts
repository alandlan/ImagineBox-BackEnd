import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Order } from "./Order";

@Entity("OrderItem")
class OrderItem {
  @PrimaryColumn()
  Id!: string;

  @Column()
  OrderId!: string;

  @Column()
  ProductId!: string;

  @Column()
  Name!: string;

  @Column()
  Quantity!: number;

  @Column()
  Price!: number;

  @Column()
  Total!: number;

  @CreateDateColumn()
  Created_at!: Date;

  @ManyToOne(() => Order)
  @JoinColumn({ name: "OrderId" })
  Order!: Order;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { OrderItem };

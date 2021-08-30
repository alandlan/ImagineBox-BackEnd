import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

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

  @CreateDateColumn()
  Created_at!: Date;

  @ManyToOne(() => Order)
  @JoinColumn({ name: "OrderId" })
  Order!: Order;
}

export { OrderItem };

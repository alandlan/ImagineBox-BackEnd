import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { OrderItem } from "./OrderItem";

@Entity("Order")
class Order {
  @PrimaryColumn()
  Id!: string;

  @Column()
  OrderStatusId!: number;

  @Column()
  UserId!: string;

  @Column()
  Price!: number;

  @CreateDateColumn()
  Created_at!: Date;

  @Column()
  ExpectedDate!: Date;

  @Column()
  PostalCode!: string;

  @Column()
  StreetName!: string;

  @Column()
  Number!: string;

  @Column()
  Complement!: string;

  @Column()
  Neighborhood!: string;

  @Column()
  City!: string;

  @Column()
  State!: string;

  @OneToMany(() => OrderItem, (OrderItem) => OrderItem.Order)
  @JoinColumn({ name: "OrderId" })
  Products!: OrderItem[];

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { Order };

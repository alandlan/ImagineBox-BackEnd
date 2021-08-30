import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

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
  Number!: string;

  @Column()
  Complement!: string;

  @Column()
  Neighborhood!: string;

  @Column()
  City!: string;

  @Column()
  State!: string;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { Order };

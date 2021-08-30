import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("OrderStatus")
class OrderStatus {
  @PrimaryColumn()
  Id!: string;

  @Column()
  Name!: string;

  @Column()
  Created_At!: Date;
}

export { OrderStatus };

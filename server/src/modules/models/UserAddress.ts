import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "./User";

@Entity("UserAddress")
class UserAddress {
  @PrimaryColumn()
  Id!: string;

  @Column()
  UserId!: string;

  @Column()
  Description!: string;

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

  @CreateDateColumn()
  Created_at!: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: "UserId" })
  User!: User;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { UserAddress };

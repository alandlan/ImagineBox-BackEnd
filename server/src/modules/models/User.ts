import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { UserAddress } from "./UserAddress";

@Entity("User")
class User {
  @PrimaryColumn()
  Id!: string;

  @Column()
  Name!: string;

  @Column()
  Email!: string;

  @Column()
  Password!: string;

  @Column()
  DocumentType!: string;

  @Column()
  Document!: string;

  @Column()
  Phone!: string;

  @Column()
  Mobile!: string;

  @Column()
  IsActive?: boolean;

  @Column()
  IsAdmin?: boolean;

  @CreateDateColumn()
  Created_at!: Date;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.User)
  @JoinColumn({ name: "UserId" })
  UserAddress!: UserAddress[];

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { User };

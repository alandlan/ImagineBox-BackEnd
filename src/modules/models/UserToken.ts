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

@Entity("UserToken")
class UserToken {
  @PrimaryColumn()
  Id!: string;

  @Column()
  UserId!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "UserId" })
  User!: User;

  @Column()
  App!: string;

  @Column()
  RefreshToken!: string;

  @Column()
  ExpiresDate!: Date;

  @CreateDateColumn()
  Created_at!: Date;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { UserToken };

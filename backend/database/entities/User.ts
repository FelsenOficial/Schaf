import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id_usr: string;

  @Column()
  usuario_usr: string;

  @Column()
  senha_usr: string;

  @Column()
  nome_usr: string;

  @Column()
  email_usr: string;

  @Column()
  cargo_usr: string;

  @Column()
  admin_usr: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id_usr) {
      this.id_usr = uuid();
    }
  }
}

export { User };

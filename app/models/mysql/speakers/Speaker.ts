import Congregation from '../congregations/Congregation';

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export default class Speaker {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @ManyToOne(type => Congregation)
  @JoinColumn({ name: 'congregation_id' })
  congregation: Congregation;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  deleted: boolean;
}

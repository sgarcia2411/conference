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
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  tokenid: string;

  @Column()
  fullname: string;

  @Column()
  phone: string;

  @Column()
  email: string;

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

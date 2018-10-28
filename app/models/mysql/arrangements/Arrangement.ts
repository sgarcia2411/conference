import Congregation from '../congregations/Congregation';
import Speaker from '../speakers/Speaker';

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
export default class Arrangement {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Congregation)
  @JoinColumn({ name: 'origin_congregation_id' })
  originCongregation: Congregation;

  @ManyToOne(type => Congregation)
  @JoinColumn({ name: 'destination_congregation_id' })
  destinationCongregation: Congregation;

  @ManyToOne(type => Speaker)
  @JoinColumn({ name: 'speaker_id' })
  speaker: Speaker;

  @Column()
  date: Date;

  @Column()
  confirmed: boolean;

  @Column()
  active: boolean;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  deleted: boolean;
}

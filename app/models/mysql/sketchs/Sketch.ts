import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export default class Sketch {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sketchNumber: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  deleted: boolean;
}

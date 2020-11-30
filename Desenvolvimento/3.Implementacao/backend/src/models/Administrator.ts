import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('administrators')
export default class Administrator {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  position_id: number;
}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('positions')
export default class Position {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}
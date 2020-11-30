import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('places')
export default class Place {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}
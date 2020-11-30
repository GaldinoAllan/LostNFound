import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}
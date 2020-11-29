import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './Image'

@Entity('items')
export default class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  category_id: number;

  @Column()
  place_id: number;

  @OneToMany(() => Image, image => image.item, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'item_id' })
  images: Image[]
}
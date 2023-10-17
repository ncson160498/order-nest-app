import { Manage } from 'src/manage/entities/manage.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: string;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  price: string;

  @Column('uuid')
  manage_id: string;

  @ManyToOne(() => Manage, (manage) => manage.products)
  @JoinColumn({ name: 'manage_id' })
  manage?: Manage;

  @OneToMany(()=>OrderItem, (orderItem)=> orderItem.product)
  orderItems?: OrderItem[];
}

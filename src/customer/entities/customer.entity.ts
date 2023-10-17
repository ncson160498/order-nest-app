import { Order } from 'src/order/entities/order.entity';
import { Field } from 'type-graphql';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryColumn('uuid')
  @Field()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: number;
  
  @Column()
  address: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}

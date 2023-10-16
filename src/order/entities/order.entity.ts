import { Customer } from 'src/customer/entities/customer.entity';
import { ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'customer_id' })
  customer_id: string;
  @Column()
  order_name: string;
  @Column()
  status: string;
  @CreateDateColumn()
  createdDate: Date;
  @Column({ type: 'numeric', precision: 30 })
  total_price: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
}

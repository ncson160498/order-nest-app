import { Customer } from 'src/customer/entities/customer.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { Field } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  public id: string;

  @Column({ name: 'customer_id' })
  @Field()
  public customer_id: string;

  @Column()
  @Field()
  public order_name: string;

  @Column()
  @Field()
  public status: string;

  @CreateDateColumn()
  public createdDate: Date;

  @Column({ type: 'numeric', precision: 30 })
  @Field()
  public total_price: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'customer_id' })
  public customer: Customer;

  @OneToMany(()=>OrderItem, (orderItem)=>orderItem.order)
  public orderItems : OrderItem[] ;
}

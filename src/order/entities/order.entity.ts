import { Customer } from "src/customer/entities/customer.entity";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Field } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  @Field()
  public id: string;

  @Column({ name: "customer_id" })
  @Field()
  public customerID: string;

  @Column({ name: "order_name" })
  @Field()
  public orderName: string;

  @Column()
  @Field()
  public status: string;

  @CreateDateColumn()
  public createdDate: Date;

  @Column({ name: "total_price", type: "numeric", precision: 30 })
  @Field()
  public totalPrice: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: "customer_id" })
  public customer: Customer;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  public orderItems: OrderItem[];
}

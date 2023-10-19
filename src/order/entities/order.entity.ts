import { AdminAction } from "src/admin-action/entities/admin-action.entity";
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
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Order {
  @PrimaryColumn("uuid")
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

  @CreateDateColumn({ name: "createdDate" })
  public createdDate: Date;

  @Column({ name: "total_price", type: "numeric", precision: 30 })
  @Field()
  public totalPrice: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: "customer_id" })
  public customer: Customer;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  public orderItems: OrderItem[];

  @OneToMany(() => AdminAction, (adminAction) => adminAction.order)
  public adminActions: AdminAction[];
}

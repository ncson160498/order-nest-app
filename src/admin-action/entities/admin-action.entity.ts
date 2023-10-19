import { Manage } from "src/manage/entities/manage.entity";
import { Order } from "src/order/entities/order.entity";
import { Field } from "type-graphql";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class AdminAction {
  @PrimaryGeneratedColumn("uuid")
  @Field()
  public id: string;

  @Column({ name: "user_id" })
  @Field()
  public userID: string;

  @Column({ name: "order_id" })
  @Field()
  public orderID: string;

  @Column({ name: "date_action" })
  @Field()
  public dateAction: Date;

  @Column()
  @Field()
  public action: string;

  @ManyToOne(() => Manage, (manage) => manage.adminActions)
  @JoinColumn({ name: "user_id" })
  public manage: Manage;

  @ManyToOne(() => Order, (order) => order.adminActions)
  @JoinColumn({ name: "order_id" })
  public order: Order;
}

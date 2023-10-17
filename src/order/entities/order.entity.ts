import { Customer } from 'src/customer/entities/customer.entity';
import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryColumn('uuid')
  @Field()
  public id: string;

  @Column({ name: 'customer_id' })
  @Field()
  public customerID: string;

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
}

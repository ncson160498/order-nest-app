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
@ObjectType()

export class Order {
  @PrimaryGeneratedColumn('uuid')
  Order_Id: string;
  @Column()
  Customer_Id: string;
  @Column()
  Order_Name: string;
  @Column()
  Status: string;
  @CreateDateColumn()
  createdDate: Date;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  Total_Price: string;

  // @ManyToOne(()=>Customer, (customer)=>customer.orders)
  // @JoinTable({name: 'Customer_Id',})
  // @TypeormLoader()
  // customer : Customer;
}

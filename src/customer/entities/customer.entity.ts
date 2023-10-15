import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  Name: string;
  @Column()
  Phone: number;
  @Column()
  Address: string;

  // @OneToMany(() => Order, (order) => order.customer)
  // orders: Order[];
}

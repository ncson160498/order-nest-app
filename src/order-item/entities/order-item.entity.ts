import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { Field } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn('uuid')
    @Field()
    public id:string;

    @Column({name:'order_id'})
    @Field()
    public order_id:string

    @Column({name: 'product_id'})
    @Field()
    public product_id:string

    @Column()
    @Field()
    public quantity:string

    @Column()
    @Field()
    public price:string

    @ManyToOne(()=>Order,(order)=>order.orderItems)
    @JoinColumn({name:'order_id'})
    public order?:Order;

    @ManyToOne(()=>Product, (product)=>product.orderItems)
    @JoinColumn({name:"product_id"})
    public product?: Product;
}
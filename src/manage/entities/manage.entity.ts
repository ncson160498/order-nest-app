import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manage{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name:string;
    @Column()
    phone:string;
    @Column()
    address:string;
    
}
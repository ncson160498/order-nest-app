import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manage{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    Name:string;
    @Column()
    Phone:string;
    @Column()
    Address:string;
}
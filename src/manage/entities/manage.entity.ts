import { AdminAction } from "src/admin-action/entities/admin-action.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @OneToMany(() => Product, (product) => product.manage)
  public products: Product[];

  @OneToMany(() => AdminAction, (adminAction) => adminAction.manage)
  public adminActions: AdminAction[];
}

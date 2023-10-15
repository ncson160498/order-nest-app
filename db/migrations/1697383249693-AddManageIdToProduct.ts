import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddManageIdToProduct1697383249693 implements MigrationInterface {
    private toManage=new TableForeignKey({
        name: 'fk_product_manage',
        columnNames: ['manage_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Manage',
       });
    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.addColumn("Product", new TableColumn({
            name: "manage_id",
            type: "uuid",
            isNullable: true,
        }),
        );

        await queryRunner.createForeignKey("Product", this.toManage);
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("Product", this.toManage);
        await queryRunner.dropColumn('Product', 'manage_id');
    }
}

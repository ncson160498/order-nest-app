import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class OderDetail1697212795231 implements MigrationInterface {
    private tableName = 'Order_Detail';
    private toProduct = new TableForeignKey({
        name: 'fk_Order_Detail_Product',
        columnNames: ['Product_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Product',
    });
    private toOrder = new TableForeignKey({
        name: 'fk_Order_Detail_Order',
        columnNames: ['Order_Id'],
        referencedColumnNames: ['Order_Id'],
        referencedTableName: 'Order',
    });
    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: this.tableName,
            columns: [
                {
                    name: 'ID',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: 'Order_Id',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'Product_Id',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'Quantity',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'Price',
                    type: 'numeric(30)',
                    isNullable: false,
                },
            ],
        });
        await queryRunner.createTable(table);
        await queryRunner.createForeignKey('Order_Detail', this.toOrder);
        await queryRunner.createForeignKey('Order_Detail', this.toProduct);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
      }

}

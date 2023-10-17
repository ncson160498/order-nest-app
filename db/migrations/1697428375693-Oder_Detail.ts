import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class OderDetail1697428375693 implements MigrationInterface {
  private tableName = 'order_item';
  private toProduct = new TableForeignKey({
    name: 'fk_order_items_product',
    columnNames: ['product_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'product',
  });
  private toOrder = new TableForeignKey({
    name: 'fk_order_items_order',
    columnNames: ['order_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'order',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'order_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'product_id',
          type: 'uuid',
          isNullable: false,
        },
        // Review code
        {
          name: 'quantity',
          type: 'real',
          isNullable: false,
        },
        {
          name: 'price',
          type: 'numeric(10,1)',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey(this.tableName, this.toOrder);
    await queryRunner.createForeignKey(this.tableName, this.toProduct);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.toOrder);
    await queryRunner.dropForeignKey(this.tableName, this.toProduct);
    await queryRunner.dropTable(this.tableName);
  }
}

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class OderDetail1697212795231 implements MigrationInterface {
  private toProduct = new TableForeignKey({
    name: 'fk_order_items_product',
    columnNames: ['product_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'product',
  });
  private toOrder = new TableForeignKey({
    name: 'fk_order_items_order',
    columnNames: ['order_id'],
    referencedColumnNames: ['order_id'],
    referencedTableName: 'order',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'order_items',
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
        {
          name: 'quantity',
          type: 'integer',
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
    await queryRunner.createForeignKey('order_items', this.toOrder);
    await queryRunner.createForeignKey('order_items', this.toProduct);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('order_items', this.toOrder);
    await queryRunner.dropForeignKey('order_items', this.toProduct);
    await queryRunner.dropTable('order_items');
  }
}

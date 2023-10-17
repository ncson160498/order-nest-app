import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Order1697428375691 implements MigrationInterface {
  private tableName = 'order';
  private toCustomer = new TableForeignKey({
    name: 'fk_customer_order',
    columnNames: ['customer_id'],
    referencedColumnNames: ['customer_id'],
    referencedTableName: 'customer',
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
          name: 'customer_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'order_name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'status',
          type: 'smallint',
          isNullable: false,
          default: 0,
        },
        {
          name: 'createdDate',
          type: 'timestamptz',
          isNullable: false,
          default: 'now()',
        },
        {
          name: 'total_price',
          type: 'numeric (30)',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey('order', this.toCustomer);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('order', this.toCustomer);
    await queryRunner.dropTable(this.tableName);
  }
}

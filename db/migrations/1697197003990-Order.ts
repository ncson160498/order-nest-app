import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Order1697197003990 implements MigrationInterface {
  private tableName = 'Order';
  private toCustomer = new TableForeignKey({
    name: 'fk_order_customer',
    columnNames: ['Customer_Id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'Customer',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: this.tableName,
      columns: [
        {
          name: 'Order_Id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'Customer_Id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'Order_Name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'Status',
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
          name: 'Total_Price',
          type: 'numeric (30)',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey('Order', this.toCustomer);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}

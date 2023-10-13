import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Product1697194831582 implements MigrationInterface {
  private tableName = 'Product';

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
          name: 'Product_Name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'Quantity',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'Price',
          type: 'float',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}

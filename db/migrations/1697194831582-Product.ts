import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Product1697194831582 implements MigrationInterface {
  private tableName = 'product';

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
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'quantity',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'price',
          type: 'numeric (10,1)',
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

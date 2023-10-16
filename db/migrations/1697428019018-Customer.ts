import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Customer1697428019018 implements MigrationInterface {
  private tableName = 'customer';
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: this.tableName,
      columns: [
        {
          name: 'customer_id',
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
          name: 'phone',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'address',
          type: 'varchar',
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

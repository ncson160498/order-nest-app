import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Manage1697194706743 implements MigrationInterface {
  //   name = 'Customer1697191662731';
  private tableName = 'Manage';
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
          name: 'Name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'Phone',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'Address',
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

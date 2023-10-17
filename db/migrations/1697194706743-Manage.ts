import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Manage1697194706743 implements MigrationInterface {
  //   name = 'Customer1697191662731';
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'manage',
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
          name: 'phone',
          type: 'varchar',
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
    await queryRunner.dropTable('manage');
  }
}

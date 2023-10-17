import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Product1697194831582 implements MigrationInterface {
  private tableName = 'product';
  private toManage = new TableForeignKey({
    name: 'fk_product_manage',
    columnNames: ['manage_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'manage',
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
        {
          name:'manage_id',
          type:'uuid',
          isNullable:false
        }
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey(this.tableName, this.toManage);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('product', this.toManage);
    await queryRunner.dropTable(this.tableName);
  }
}

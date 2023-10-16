import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddManageIdToProduct1697383249693 implements MigrationInterface {
  private toManage = new TableForeignKey({
    name: 'fk_product_manage',
    columnNames: ['manage_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'manage',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'product',
      new TableColumn({
        name: 'manage_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey('product', this.toManage);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('product', this.toManage);
    await queryRunner.dropColumn('product', 'manage_id');
  }
}

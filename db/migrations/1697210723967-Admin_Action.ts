import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AdminAction1697210723967 implements MigrationInterface {
  private toOrder = new TableForeignKey({
    name: 'fk_admin_action_order',
    columnNames: ['order_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'order',
  });
  private toManage = new TableForeignKey({
    name: 'fk_admin_action_Manage',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'manage',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'admin_action',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'user_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'order_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'date_action',
          type: 'date',
          isNullable: false,
          default: 'now()',
        },
        {
          name: 'action',
          type: 'varchar',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey('admin_action', this.toOrder);
    await queryRunner.createForeignKey('admin_action', this.toManage);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('admin_action', this.toOrder);
    await queryRunner.dropForeignKey('admin_action', this.toManage);
    await queryRunner.dropTable('admin_action');
  }
}

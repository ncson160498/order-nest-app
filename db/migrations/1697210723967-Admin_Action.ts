import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AdminAction1697210723967 implements MigrationInterface {
   private tableName = 'AdminAction'
   private toOrder=new TableForeignKey({
    name: 'fk_Admin_Action_Order',
    columnNames: ['order_id'],
    referencedColumnNames: ['Order_Id'],
    referencedTableName: 'Order',
   });
   private toManage=new TableForeignKey({
    name: 'fk_Admin_Action_Manage',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'Manage',
   });
   public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
        name:this.tableName,
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                isNullable: false,
            },
            {
                name: 'user_id',
                type:'uuid',
                isNullable: false,
            },
            {
                name: 'order_id',
                type:'uuid',
                isNullable: false,
            },
            {
                name:'date_action',
                type:'date',
                isNullable: false,
                default:'now()',
            },
            {
                name:'action',
                type:'varchar',
                isNullable: false,
            }
        ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey('AdminAction', this.toOrder);
    await queryRunner.createForeignKey('AdminAction', this.toManage);
   }
   public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
   }
}

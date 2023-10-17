import { MigrationInterface, QueryRunner } from "typeorm"

export class RenameColumnCustomer1697519336341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('customer', 'customer_id', 'id');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('customer','id','customer_id');
    }

}

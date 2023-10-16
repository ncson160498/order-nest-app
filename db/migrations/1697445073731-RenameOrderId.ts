import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameOrderId1697445073731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('order', 'order_id', 'id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('order', 'id', 'order_id');
  }
}

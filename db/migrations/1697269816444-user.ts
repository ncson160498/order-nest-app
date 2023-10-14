import { MigrationInterface, QueryRunner } from "typeorm";

export class User1697269816444 implements MigrationInterface {
    name = 'User1697269816444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("Order_Id" SERIAL NOT NULL, "Customer_Id" character varying NOT NULL, "Order_Name" character varying NOT NULL, "Status" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "Total_Price" numeric(10,2) NOT NULL, CONSTRAINT "PK_b6ec0ca8c42eae26159665077d5" PRIMARY KEY ("Order_Id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}

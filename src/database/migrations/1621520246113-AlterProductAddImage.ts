import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProductAddImage1621520246113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "Product",
      new TableColumn({
        name: "Img",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("Product", "Img");
  }
}

import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProductAddIsActive1621533380230
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "Product",
      new TableColumn({
        name: "IsActive",
        type: "boolean",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("Product", "IsActive");
  }
}

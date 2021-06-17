import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFKProduct1623963069279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "Product",
      new TableForeignKey({
        name: "FKProductCategory",
        columnNames: ["CategoryId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "Category",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("Product", "FKProductCategory");
  }
}

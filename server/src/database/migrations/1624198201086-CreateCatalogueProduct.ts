import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateCatalogueProduct1624198201086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "CatalogueProduct",
        columns: [
          {
            name: "CatalogueId",
            type: "uuid",
          },
          {
            name: "ProductId",
            type: "uuid",
          },
          {
            name: "Created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "CatalogueProduct",
      new TableForeignKey({
        name: "FKCatalogueProductCatalogue",
        columnNames: ["CatalogueId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "Catalogue",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "CatalogueProduct",
      new TableForeignKey({
        name: "FKCatalogueProductProduct",
        columnNames: ["ProductId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "Product",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "CatalogueProduct",
      "FKCatalogueProductCatalogue"
    );
    await queryRunner.dropForeignKey(
      "CatalogueProduct",
      "FKCatalogueProductProduct"
    );
    await queryRunner.dropTable("CatalogueProduct");
  }
}

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateProduct1624112748882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Product",
        columns: [
          {
            name: "Id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "Name",
            type: "varchar",
          },
          {
            name: "Description",
            type: "varchar",
          },
          {
            name: "Price",
            type: "numeric",
          },
          {
            name: "CategoryId",
            type: "uuid",
          },
          {
            name: "IsActive",
            type: "boolean",
          },
          {
            name: "Img",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "Weight",
            type: "varchar",
          },
          {
            name: "Height",
            type: "varchar",
          },
          {
            name: "Width",
            type: "varchar",
          },
          {
            name: "Length",
            type: "varchar",
          },
          {
            name: "Format",
            type: "varchar",
          },
          {
            name: "Diameter",
            type: "varchar",
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
    await queryRunner.dropTable("Product");
  }
}

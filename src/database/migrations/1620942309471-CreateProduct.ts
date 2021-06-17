import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1620942309471 implements MigrationInterface {
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
            type: "money",
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
            name: "Created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Product");
  }
}

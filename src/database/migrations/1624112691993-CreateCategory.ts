import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategory1624112691993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Category",
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
            name: "IsActive",
            type: "boolean",
            default: false,
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
    await queryRunner.dropTable("Category");
  }
}

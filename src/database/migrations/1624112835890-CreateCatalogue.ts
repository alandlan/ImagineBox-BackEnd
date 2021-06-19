import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCatalogue1624112835890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Catalogue",
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
    await queryRunner.dropTable("Catalogue");
  }
}

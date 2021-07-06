import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1624112465944 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "User",
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
            name: "Email",
            type: "varchar",
          },
          {
            name: "Password",
            type: "varchar",
          },
          {
            name: "DocumentType",
            type: "varchar",
          },
          {
            name: "Document",
            type: "varchar",
          },
          {
            name: "Phone",
            type: "varchar",
          },
          {
            name: "Mobile",
            type: "varchar",
          },
          {
            name: "IsActive",
            type: "boolean",
          },
          {
            name: "IsAdmin",
            type: "boolean",
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
    await queryRunner.dropTable("User");
  }
}

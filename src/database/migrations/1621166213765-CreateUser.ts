import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1621166213765 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "User",
        columns: [
          {
            name: "Id",
            type: "varchar",
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

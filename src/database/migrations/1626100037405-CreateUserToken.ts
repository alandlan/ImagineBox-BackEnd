import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserToken1626100037405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "UserToken",
        columns: [
          {
            name: "Id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "UserId",
            type: "uuid",
          },
          {
            name: "App",
            type: "varchar",
          },
          {
            name: "RefreshToken",
            type: "varchar",
          },
          {
            name: "ExpiresDate",
            type: "timestamp",
          },
          {
            name: "Created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserToken",
            referencedTableName: "User",
            referencedColumnNames: ["Id"],
            columnNames: ["UserId"],
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("UserToken", "FKUserToken");
    await queryRunner.dropTable("UserToken");
  }
}

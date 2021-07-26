import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ShopCart1627072914978 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ShopCart",
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
        ],
        foreignKeys: [
          {
            name: "FK_ShopCart_User",
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
    await queryRunner.dropForeignKey("ShopCart", "FK_ShopCart_User");
    await queryRunner.dropTable("ShopCart");
  }
}

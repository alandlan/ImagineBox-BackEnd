import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ShopItemCart1627075142750 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ShopItemCart",
        columns: [
          {
            name: "Id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "ShopCartId",
            type: "uuid",
          },
          {
            name: "UserId",
            type: "uuid",
          },
          {
            name: "ProductId",
            type: "uuid",
          },
          {
            name: "Quantity",
            type: "smallint",
          },
          {
            name: "Created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FK_ShopItemCart_ShopCart",
            referencedTableName: "ShopCart",
            referencedColumnNames: ["Id"],
            columnNames: ["ShopCartId"],
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
          },
          {
            name: "FK_ShopItemCart_User",
            referencedTableName: "User",
            referencedColumnNames: ["Id"],
            columnNames: ["UserId"],
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
          },
          {
            name: "FK_ShopItemCart_Product",
            referencedTableName: "Product",
            referencedColumnNames: ["Id"],
            columnNames: ["ProductId"],
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "ShopItemCart",
      "FK_ShopItemCart_ShopCart"
    );
    await queryRunner.dropForeignKey("ShopItemCart", "FK_ShopItemCart_User");
    await queryRunner.dropForeignKey("ShopItemCart", "FK_ShopItemCart_Product");

    await queryRunner.dropTable("ShopItemCart");
  }
}

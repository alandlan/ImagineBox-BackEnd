import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateOrderItem1630343259150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "OrderItem",
        columns: [
          {
            name: "Id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "OrderId",
            type: "uuid",
          },
          {
            name: "ProductId",
            type: "uuid",
          },
          {
            name: "Name",
            type: "varchar",
          },
          {
            name: "Quantity",
            type: "smallint",
          },
          {
            name: "Price",
            type: "numeric",
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
      "OrderItem",
      new TableForeignKey({
        name: "FKOrderItemOrder",
        columnNames: ["OrderId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "Order",
        onDelete: "RESTRICT",
      })
    );

    await queryRunner.createForeignKey(
      "OrderItem",
      new TableForeignKey({
        name: "FKOrderItemProduct",
        columnNames: ["ProductId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "Product",
        onDelete: "RESTRICT",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("OrderItem", "FKOrderItemOrder");
    await queryRunner.dropForeignKey("OrderItem", "FKOrderItemProduct");
    await queryRunner.dropTable("OrderItem");
  }
}

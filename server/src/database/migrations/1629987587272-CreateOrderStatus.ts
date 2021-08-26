import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateOrderStatus1629987587272 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "OrderStatus",
        columns: [
          {
            name: "Id",
            type: "int",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true,
          },
          {
            name: "Name",
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
    await queryRunner.createIndex(
      "OrderStatus",
      new TableIndex({
        name: "IDX_ORDERSTATUS_NAME",
        columnNames: ["Name"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("OrderStatus", "IDX_ORDERSTATUS_NAME");
    await queryRunner.dropTable("OrderStatus");
  }
}

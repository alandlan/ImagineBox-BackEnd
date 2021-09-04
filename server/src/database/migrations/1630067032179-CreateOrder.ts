import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateOrder1630067032179 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Order",
        columns: [
          {
            name: "Id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "OrderStatusId",
            type: "int",
          },
          {
            name: "UserId",
            type: "uuid",
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
          {
            name: "ExpectedDate",
            type: "timestamp",
          },
          {
            name: "PostalCode",
            type: "varchar",
          },
          {
            name: "StreetName",
            type: "varchar",
          },
          {
            name: "Number",
            type: "varchar",
          },
          {
            name: "Complement",
            type: "varchar",
          },
          {
            name: "Neighborhood",
            type: "varchar",
          },
          {
            name: "City",
            type: "varchar",
          },
          {
            name: "State",
            type: "varchar",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "Order",
      new TableForeignKey({
        name: "FKOrderOrderStatus",
        columnNames: ["OrderStatusId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "OrderStatus",
        onDelete: "RESTRICT",
      })
    );

    await queryRunner.createForeignKey(
      "Order",
      new TableForeignKey({
        name: "FKOrderUser",
        columnNames: ["UserId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "User",
        onDelete: "RESTRICT",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("Order", "FKOrderOrderStatus");
    await queryRunner.dropForeignKey("Order", "FKOrderUser");
    await queryRunner.dropTable("Order");
  }
}

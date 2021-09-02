import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class UserAddress1625570523588 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "UserAddress",
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
            name: "Description",
            type: "varchar",
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
          {
            name: "Created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "UserAddress",
      new TableForeignKey({
        name: "FKUserAddressUser",
        columnNames: ["UserId"],
        referencedColumnNames: ["Id"],
        referencedTableName: "User",
        onDelete: "RESTRICT",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("UserAddress", "FKUserAddressUser");
    await queryRunner.dropTable("UserAddress");
  }
}

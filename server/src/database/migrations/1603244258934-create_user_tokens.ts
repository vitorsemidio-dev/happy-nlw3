import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUserTokens1603244258934 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_tokens",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "token",
            type: "varchar",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "user_id",
            type: "integer",
            unsigned: true,
          },
        ],
        foreignKeys: [
          {
            name: "UserToken",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_tokens");
  }
}

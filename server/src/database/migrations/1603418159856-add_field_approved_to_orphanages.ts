import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addFieldApprovedToOrphanages1603418159856
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "orphanages",
      new TableColumn({
        name: "approved",
        type: "boolean",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("orphanages", "approved");
  }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createItems1606678951391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'items',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'description',
          type: 'text'
        },
        {
          name: 'date',
          type: 'date'
        },
        {
          name: 'category_id',
          type: 'integer'
        },
        {
          name: 'place_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'ItemCategory',
          columnNames: ['category_id'],
          referencedTableName: 'categories',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        {
          name: 'ItemPlace',
          columnNames: ['place_id'],
          referencedTableName: 'places',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('items')
  }

}

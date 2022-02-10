import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1644169803474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id_usr',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'usuario_usr',
            type: 'varchar',
          },
          {
            name: 'senha_usr',
            type: 'varchar',
          },
          {
            name: 'nome_usr',
            type: 'varchar',
          },
          {
            name: 'email_usr',
            type: 'varchar',
          },
          {
            name: 'cargo_usr',
            type: 'varchar',
          },
          {
            name: 'admin_usr',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

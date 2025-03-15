import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTiggerForInactiveImages1737980701127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            IF OBJECT_ID('trg_InsertInactiveImages', 'TR') IS NOT NULL  
                DROP TRIGGER trg_InsertInactiveImages;
        `);
        
        await queryRunner.query(`
            CREATE TRIGGER trg_InsertInactiveImages
            ON Images
            AFTER UPDATE
            AS
            BEGIN
                SET NOCOUNT ON;
                INSERT INTO InactiveImage (Images_ID, CloudPublicImagelink, IsActive, CreatedOn, ModifiedOn)
                SELECT ID, Link, IsActive, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
                FROM Inserted 
                WHERE IsActive = 0 AND Product_ID > 0;
            END;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` 
            DROP TRIGGER trg_InsertInactiveImages;
        `
        );
    }

}

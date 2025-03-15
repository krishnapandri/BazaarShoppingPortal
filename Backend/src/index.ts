import { AppDataSource } from "./data-source"

(async ()=>{
    const datasource = await AppDataSource.initialize();
    const queryRunner = datasource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        
        await queryRunner.commitTransaction();
    } catch (err) {
        await queryRunner.rollbackTransaction();
        throw err;
    } finally {
        await queryRunner.release();
    }
})();



import { EntityOptions, EntityTarget } from "typeorm";
import { AppDataSource } from "../data-source";
import { WritetoErrorFile } from "./ErrorLogUtils";
const db=AppDataSource.manager;

export async function ExecuteQuery(query) {
    try {
       return await AppDataSource.query(query);
    } catch (err) {
        WritetoErrorFile(err, __filename, "ExecuteQuery");
        throw err; // Re-throw the error for further handling
    } 
}

export async function ExecuteQueryWithEntity<T>(en:EntityTarget<T>,targetObj:T) {
    try {
        return await db.save(en,targetObj);
    } catch (err) {
        WritetoErrorFile(err, __filename, "ExecuteQuery");
        throw err; // Re-throw the error for further handling
    } 
}
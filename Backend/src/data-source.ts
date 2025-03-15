import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Brand } from "./entity/Brand";
import { Cart } from "./entity/Cart";
import { Categories } from "./entity/Categories";
import { CustomerProfile } from "./entity/CustomerProfile";
import { ErrorLog } from "./entity/ErrorLog";
import { Images } from "./entity/Images";
import { Options } from "./entity/Options";
import { Product } from "./entity/Product";
import { Reviews } from "./entity/Reviews";
import { Subcategories } from "./entity/Subcategories";
import { InactiveImage } from "./entity/InactiveImage";
import { AddTiggerForInactiveImages1737980701127 } from "./migration/1737980701127-addTiggerForInactiveImages";
import { UploadImageLog } from "./entity/UploadImageLog";
require('dotenv').config();

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",  // Use the SQL Server instance name
    connectionTimeout:10000,
    requestTimeout:10000,
    port: parseInt(process.env.DB_PORT),  // The default port for SQL Server
    database: process.env.DB,  // Your database name
    synchronize: false,  // Set to false in production
    logging: true,
    // username: "paras",  // SQL authentication username
    // password: "k",  // SQL authentication password
    extra: {
        trustServerCertificate: true,  // Allows self-signed certificates
        options: {
            encrypt: false,  // Set to true for encrypted connections
        },
    },
    authentication:{
        type:'ntlm',
        options:{
            domain:process.env.DOMAIN,userName:process.env.DB_USER,password:process.env.DB_PASS
        }
    },
    entities: [User,
               Brand,
               Cart,
               Categories,
               CustomerProfile,
               ErrorLog,
               Images,
               Options,
               Product,
               Reviews,
               Subcategories,
               InactiveImage,
               UploadImageLog       
    ],  // Your entities
    migrations: [AddTiggerForInactiveImages1737980701127],  // Add migration files if needed
    subscribers: [],  // Add subscribers if needed
});

export enum CriticalLevel{
    LOW=3,
    Medium=2,
    HIGH=1,
}
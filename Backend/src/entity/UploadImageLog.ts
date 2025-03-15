import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("UploadImageLog", { schema: "dbo" })
export class UploadImageLog {
    @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
    id: string;

    @Column("varchar", { name: "FileName",length:100 })
    filename: string;

    @Column("smallint", { name: "IsSuccess",default:1 })
    issucess: number;

    @Column("nvarchar", { name: "ErrorMessage", length: 1000 ,default:'' })
    error: string;

    @CreateDateColumn({ name: "CreatedOn" })
    createdOn: Date;

    @UpdateDateColumn({ name: "ModifiedOn" })
    modifiedOn: Date;
}
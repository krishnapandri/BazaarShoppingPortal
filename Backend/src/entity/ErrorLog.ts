import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CriticalLevel } from "../data-source";

@Index("PK_Error_Log", ["id"], { unique: true })
@Entity("ErrorLog", { schema: "dbo" })
export class ErrorLog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("bigint", { name: "CustomerID" })
  customerId:number;

  @Column("smallint", { name: "IsActive",default:1 })
  isActive: number;

  @Column("nvarchar", { name: "LineNo", length: 10 })
  lineNo: string;

  @Column("nvarchar", { name: "ErrorDesc", length: 2000 })
  errorDesc: string;

  @Column("varchar", { name: "TraceMessage",length:2000 })
  traceMessage: string;

  @Column("nvarchar", { name: "FileName", length: 2000 })
  fileName: string;
  
  @Column("nvarchar", { name: "SqlQuery", length: 2000 })
  sqlquery: string;

  @Column("varchar", { name: "MethodName", nullable: true, length: 50 })
  methodName: string | null;
  
  @Column("smallint", { name: "CriticalLevel"})
  criticalLevel:CriticalLevel = CriticalLevel.HIGH;

  @CreateDateColumn({ name: "CreatedOn" })
  createdOn: Date;

  @UpdateDateColumn({ name: "ModifiedOn" })
  modifiedOn: Date;
}

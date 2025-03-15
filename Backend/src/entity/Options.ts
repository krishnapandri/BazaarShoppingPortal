import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { AppDataSource } from "../data-source";

@Index("PK__Options__3214EC27551983A4", ["id"], { unique: true })
@Entity("Options", { schema: "dbo" })
export class Options {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("bigint", { name: "Product_ID" })
  productId: string;

  @Column("nvarchar", { name: "Name", length: 255 })
  name: string;

  @Column("nvarchar", { name: "Desc", length: 255 })
  desc: string;

  @Column("smallint", { name: "IsActive" })
  isActive: 1|0;

  @Column("nvarchar", { name: "TypeOption", length: 15 })
  typeOption: string;

  @Column("decimal", { name: "StockQty", precision: 16, scale: 4 })
  stockQty: number;

  @Column("datetime2", { name: "CreatedOn", nullable: true })
  createdOn: Date | null;

  @Column("datetime2", { name: "ModifiedOn", nullable: true })
  modifiedOn: Date | null;
}


export async function CreateOption(name:string,desc:string,isActive:1|0,typeOption:string,stockQty:number){
  const opt = new Options();
  const propertyNames = ['name','desc','isActive','typeOption','stockQty'];
  const value = [name,desc,isActive,typeOption,stockQty];
  propertyNames.forEach((o,i)=>opt[o] = value[i]);
  const result = await AppDataSource.manager.save(Options);
  return result;
}
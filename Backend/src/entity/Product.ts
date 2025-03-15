import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AppDataSource } from "../data-source";

@Index("PK_Product", ["id"], { unique: true })
@Entity("Product", { schema: "dbo" })
export class Product {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: number;

  @Column("bigint", { name: "Category_ID",nullable:true })
  categoryId: number;

  @Column("bigint", { name: "SubCategory_ID",nullable:true  })
  subCategoryId: number;

  @Column("bigint", { name: "Brand_ID", nullable: true })
  brandId: number;

  @Column("varchar", { name: "Name", length: 100 })
  name: string;

  @Column("varchar", { name: "Code", length: 100 })
  code: string;

  @Column("varchar", { name: "Desc", length: 1000 })
  desc: string;

  @Column("decimal", {name: "AvgPrice",precision: 16,scale: 4})
  avgPrice: number;

  @Column("decimal", {name: "SalePrice",precision: 16,scale:4})
  salesPrice: number;
  
  @Column("int", {name: "StockCount",nullable:true})
  stockCount: number;

  @Column("smallint", { name: "IsActive" })
  isActive: number;

  @Column("varchar", { name: "Tags",length:1000})
  Tags: string;

  // @Column("datetime2", { name: "CreatedOn",default:'GETDATE()' })
  @CreateDateColumn({name:'CreatedOn',type:'datetime2'})
  createdOn: Date;

  // @Column("datetime2", { name: "ModifiedOn",default:'GETDATE()' })
  @UpdateDateColumn({name: "ModifiedOn",type:"datetime2"})
  modifiedOn: Date;
}

export const columnProps = ['categoryId','subCategoryId','brandId','name','code','desc','avgPrice','salesPrice','isActive','Tags'];

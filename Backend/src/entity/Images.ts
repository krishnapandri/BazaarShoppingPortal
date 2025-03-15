import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Index("PK_Images", ["id"], { unique: true })
@Entity("Images", { schema: "dbo" })
export class Images {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("bigint", { name: "Product_ID" })
  productId:number;

  @Column("varchar", { name: "Link",nullable:true })
  link: string;

  @Column("bigint", { name: "Option_ID" })
  optionId:number;

  @Column("smallint", { name: "IsActive" })
  isActive: number;

  @Column('smallint',{name:'IsUploadedToCloud',nullable:true})
  isUplodedToCloud:number;
  
  @CreateDateColumn({name:'CreatedOn',type:'datetime2'})
  createdOn: Date;
  
  @UpdateDateColumn({name: "ModifiedOn",type:"datetime2"})
  modifiedOn: Date;
}

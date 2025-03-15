import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Index("PK_Categories", ["id"], { unique: true })
@Entity("Categories", { schema: "dbo" })
export class Categories {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: number;

  @Column("varchar", { name: "Name", length: 255 })
  name: string;

  @Column("varchar", { name: "Img", length: 255 })
  img: string;

  @Column("smallint", { name: "IsActive",default:1 })
  isActive: number;

  @Column("smallint", { name: "IsFeatured" })
  isfeatured: number;

  @Column('smallint',{name:'IsImgUploadedToCloud',nullable:true})
  isImgUplodedToCloud:number;

  @CreateDateColumn({ name: "CreatedOn" })
  createdOn: Date;

  @UpdateDateColumn({ name: "ModifiedOn" })
  modifiedOn: Date;
}

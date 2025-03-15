import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Subcategories", ["id"], { unique: true })
@Entity("Subcategories", { schema: "dbo" })
export class Subcategories {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("bigint", { name: "Cateogry_ID" })
  cateogryId: string;

  @Column("smallint", { name: "IsActive" })
  isActive: number;

  @Column("varchar", { name: "Name", length: 255 })
  name: string;

  @Column("varchar", { name: "Desc", length: 500 })
  desc: string;

  @Column("datetime2", { name: "CreatedOn" })
  createdOn: Date;

  @Column("datetime2", { name: "ModifiedOn" })
  modifiedOn: Date;
}

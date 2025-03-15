import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Index("PK__Brand__3214EC272A2E4419", ["id"], { unique: true })
@Entity("Brand", { schema: "dbo" })
export class Brand {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("nvarchar", { name: "BrandName", length: 255 })
  brandName: string;

  @Column("smallint", { name: "IsActive" })
  isActive: number;

  @Column("varchar", { name: "BrandImage", nullable: true })
  brandImage: string | null;

  @Column("varchar", { name: "IsImgUplodedToCloud", nullable: true })
  isImgUplodedToCloud: number;

  @CreateDateColumn({ name: "CreatedOn", nullable: true })
  createdOn: Date | null;

  @UpdateDateColumn({ name: "ModifiedOn", nullable: true })
  modifiedOn: Date | null;
}

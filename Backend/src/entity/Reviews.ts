import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__Reviews__3214EC278D5CF56C", ["id"], { unique: true })
@Entity("Reviews", { schema: "dbo" })
export class Reviews {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("bigint", { name: "Customer_ID" })
  customerId: string;

  @Column("bigint", { name: "Product_ID" })
  productId: string;

  @Column("bigint", { name: "Option_ID" })
  optionId: number;

  @Column("smallint", { name: "IsActive" })
  isActive: number;

  @Column("nvarchar", { name: "Desc", length: 255 })
  desc: string;

  @Column("decimal", { name: "Rating" })
  rating: number;

  @Column("datetime2", { name: "CreatedOn", nullable: true })
  createdOn: Date | null;

  @Column("datetime2", { name: "ModfiedOn", nullable: true })
  modfiedOn: Date | null;
}

import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__Cart__3214EC2724F54884", ["id"], { unique: true })
@Entity("Cart", { schema: "dbo" })
export class Cart {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("bigint", { name: "Customer_ID" })
  customerId: string;

  @Column("bigint", { name: "CustomerAddress_ID" })
  customerAddressId: string;

  @Column("bigint", { name: "Product_ID" })
  productId: string;

  @Column("bigint", { name: "Option_ID" })
  optionId: string;

  @Column("smallint", { name: "IsActive" })
  isActive: number;

  @Column("decimal", { name: "TotalQty", precision: 16, scale: 4 })
  totalQty: number;

  @Column("decimal", { name: "Price", precision: 16, scale: 4 })
  price: number;

  @Column("decimal", { name: "TotalCost", precision: 16, scale: 4 })
  totalCost: number;

  @Column("bigint", { name: "Image_ID", nullable: true })
  imageId: string | null;

  @Column("datetime2", { name: "CreatedOn", nullable: true })
  createdOn: Date | null;

  @Column("datetime2", { name: "ModifiedOn", nullable: true })
  modifiedOn: Date | null;
}

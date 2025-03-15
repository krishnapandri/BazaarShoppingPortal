import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("InactiveImage", { schema: "dbo" })
export class InactiveImage {
    @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
    id: string;
  
    @Column("smallint", { name: "Images_ID" })
    imagesid: number;

    @Column("varchar", { name: "CloudPublicImagelink" })
    cloudimagelink: string;

    @Column("smallint", { name: "IsActive" })
    isActive: number;
  
    @Column("datetime2", { name: "CreatedOn" })
    createdOn: Date;
  
    @Column("datetime2", { name: "ModifiedOn" })
    modifiedOn: Date;
  }
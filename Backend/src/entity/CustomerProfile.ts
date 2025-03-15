import { BeforeInsert, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt'
@Index("PK_CustomerProfile", ["id"], { unique: true })
@Entity("CustomerProfile", { schema: "dbo" })
export class CustomerProfile {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("varchar", { name: "Email", length: 50 })
  email: string;
  
  @Column("varchar", { name: "PhoneNo", length: 50 })
  phone: string;
  
  @Column("varchar", { name: "ImgName", length: 50 })
  imgname: string;
  
  @Column("varchar", { name: "Name", length: 100 })
  name: string;

  @Column("varchar", { name: "Password", length: 50 })
  password: string;

  @Column("smallint", { name: "IsActive" })
  isActive: number;

  @Column("datetime2", { name: "ModifiedOn", nullable: true })
  modifiedOn: Date | null;

  @Column("datetime2", { name: "CreatedOn", nullable: true })
  createdOn: Date | null;
  
/* 28/01/2024 paras */
  @BeforeInsert()
  hashPassword() {
    bcrypt.hash(this.password,10)
    .then((hashedPassword: string)=>this.password = hashedPassword);
  }
}

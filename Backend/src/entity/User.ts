import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "dbo" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "firstName", length: 255 })
  firstName: string;

  @Column("nvarchar", { name: "lastName", length: 255 })
  lastName: string;

  @Column("decimal", { name: "age", precision: 16, scale: 4 })
  age: number;
}

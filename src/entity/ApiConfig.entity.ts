import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ApiConfig {
  @PrimaryGeneratedColumn() id: number;
  @Column({type:'int',nullable:false}) connectId:number;
  @Column({ type: 'varchar', nullable: false, width: 200 }) name: string;
  @Column({ type: 'varchar', nullable: true, width: 200 })  description: string;

  @Column({type:'varchar',nullable:false,width:200}) bodyType:string;
  @Column({ type: 'text', nullable: false })  body: string;

}
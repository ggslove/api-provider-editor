import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiType} from './EntityEnum';

@Entity()
export default class ApiConnect {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', nullable: false, width: 200}) type: ApiType = ApiType.DB;//类型
  @Column({type: 'varchar', nullable: false, width: 200}) name:string;//显示名称
  @Column({type: 'text', nullable: false}) config:string;

}
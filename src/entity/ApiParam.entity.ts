
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiParamType } from './EntityEnum';

@Entity()
export default class ApiParam {
  @PrimaryGeneratedColumn()
  id: number;//ID
  @Column({type: 'varchar', nullable: false, width: 200}) configId: number;//ApiConfig主键
  @Column({type: 'varchar', nullable: false, width: 200}) name: string;//名称
  @Column({type: 'varchar', nullable: false, width: 200}) nameDescribe: string;//描述
  @Column({type: 'int', nullable: false}) type: ApiParamType = ApiParamType.STRING;//类型
  @Column({type: 'varchar', nullable: false, width: 200}) description: string;
  @Column({type: 'text', nullable: false, width: 200}) showConfig: string;  //显示配置，待扩展

}
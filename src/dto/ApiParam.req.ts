import { ApiParamType } from "../entity/EntityEnum";

export default interface ApiParamReq {
  configId: number;//ApiConfig主键
  name: string;//名称
  nameDescribe: string;//描述
  type: ApiParamType;//类型
  showConfig: string;  //显示配置，待扩展
}
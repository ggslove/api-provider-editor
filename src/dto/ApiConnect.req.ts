import { ApiType } from "../entity/EntityEnum";

export default interface ApiConnectReq{
  type: ApiType;//类型
  name:string;//显示名称
  config:string;

}
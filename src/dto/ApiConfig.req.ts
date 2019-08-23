import ApiParamReq from './ApiParam.req';
import { ApiType} from '../entity/EntityEnum';
export default interface ApiConfigRequest{
  name:string;
  connectId:number;
  description: string;
  bodyType:string;//body 类型，使用字符串
  body: string;
  apiParmaList?:ApiParamReq[]
}
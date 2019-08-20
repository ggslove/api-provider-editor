import ApiParamReq from './ApiParam.req';
import { ApiType} from '../entity/EntityEnum';
export default interface ApiConfigRequest{
  name:string;
  connectId:number;
  description: string;
  body: string;

  apiParmaList?:ApiParamReq[]
}
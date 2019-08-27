// ioctx.module("user").sa
import ioctx,{IApiCfg,IModuleCfg,IFetch,Method} from './IoContext';
// IUser.saveUser.execute()
// IUser.saveUser.data("ahah").execute();

interface IUserCfg extends IModuleCfg {
    saveUser: IApiCfg;
}

const User:IUserCfg={
  saveUser:{
    mock:true,
    method:Method.GET,
    mockUrl:"/aaa",
    url:"/bbb"
  } 
}
ioctx.create("user",User);
export default ioctx.modules("user") as IFetch<IUserCfg>;
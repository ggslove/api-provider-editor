export interface IModuleCfg {
  [k: string]: IApiCfg
}
export type IFetch<T> = { [k in keyof T]: IApi };

export enum Method {
  GET, POST, DELETE, PATCH,
}
export interface IApiCfg {
  mock: boolean;
  mockUrl: string;
  url: string;
  method: Method;
}


interface IApi {
  param: (key: string, value: string | number) => this;
  data: (data: any) => this;
  execute: () => Promise<any>
}

class ApiImpl implements IApi {
  private urlMap: Map<string, string | number>;
  private d: any;
  private cfg: IApiCfg;

  public constructor(cfg: IApiCfg) {
    this.cfg = cfg;
    this.urlMap = new Map()
  }

  param(key: string, value: string | number) {
    this.urlMap.set(key, value);
    return this;
  }
  data(data: any) {
    this.d = data;
    return this;
  };
  async execute() {
    console.log("this.d is: " + this.d)
    return "aaa";
  }
}

interface IIOContext {
  create: (module: string, iModuleCfg: IModuleCfg) => void
  modules: (module: string) => IFetch<IModuleCfg>|undefined ;

}

class IOContext implements IIOContext {
  private contextMap: Map<string, IFetch<IModuleCfg>> = new Map();
  create(module: string, cfg: IModuleCfg) {
      const moduleFetch:IFetch<IModuleCfg>={};
      for(let key in cfg){
        moduleFetch[key]=new ApiImpl(cfg[key]);
      }
      this.contextMap.set(module,moduleFetch);
  }
  //=> IConfigDo<IConfig>;
  modules(module: string):IFetch<IModuleCfg>|undefined {
      return this.contextMap.get(module);
  }
}


const ioctx = new IOContext();

export default ioctx;
// interface IUserCfg extends IModuleCfg {
//   saveUser: IApiCfg;
// }

// const userCfg: IUserCfg = {
//   saveUser: {
//     mock: true,
//     mockUrl: "aaa",
//     url: "bbb",
//     method: METHOD.DELETE
//   }
// }

// ioctx.create("user", userCfg);

// export default ioctx.modules("user") as IModuleCfgFetch<IUserCfg>;

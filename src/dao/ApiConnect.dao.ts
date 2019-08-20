import { Repository,getRepository } from 'typeorm';
import ApiConnect from '../entity/ApiConnect.entity'
import ApiConnectReq from '../dto/ApiConnect.req';
import { ApiType } from '../entity/EntityEnum';
import {ESHandlerImpl} from '../handle/EsApi.handle'; 

// let photoRepository = connection.getRepository(Photo);
const entity=ApiConnect;

export default  {
  test:async(req:ApiConnectReq)=>{
    switch(req.type){
      case ApiType.DB:
      case ApiType.ES:return new ESHandlerImpl().test(req as ApiConnect);
      default:return {success:false,err:`ApiConnect type[${req.type}] 异常`};
        //throw new Error();
    }
  },
  save:async (req:ApiConnectReq)=>{
    const repository:Repository<ApiConnect>=getRepository(entity);
    return await repository.save(req as ApiConnect);
  },
  update:async(id:number,req:ApiConnectReq) =>{
    const repository:Repository<ApiConnect>=getRepository(entity);
    return await repository.update(id,req as ApiConnect)
  },
  findAll:async()=>{
    const repository:Repository<ApiConnect>=getRepository(entity);
    return await repository.find();
  },
  findById:async(id:number)=>{
    const repository:Repository<ApiConnect>=getRepository(entity);
    return await repository.findOne(id);
  }


}

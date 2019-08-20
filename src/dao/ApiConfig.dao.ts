import { Repository,getRepository } from 'typeorm';
import ApiConfig from '../entity/ApiConfig.entity'
import ApiConfigReq from '../dto/ApiConfig.req';

export default  {
  add:async(req:ApiConfigReq)=>{
    const apiConfigRepository:Repository<ApiConfig>=getRepository(ApiConfig);
    return apiConfigRepository.save(req as ApiConfig);
  },
  findOne:async (id:number)=>{
    const apiConfigRepository:Repository<ApiConfig>=getRepository(ApiConfig);
    return await apiConfigRepository.findOne(id);
  },
  findByConnectId:async(connectId:number)=>{
    const apiConfigRepository:Repository<ApiConfig>=getRepository(ApiConfig);
    return await apiConfigRepository.find({where:{connectId}})
  }
}

import { Client, ApiResponse } from '@elastic/elasticsearch';
import ApiConfig from '../entity/ApiConfig.entity';
import ApiConnect from '../entity/ApiConnect.entity';
import ApiConnectDao from '../dao/ApiConnect.dao';
interface ESHandler {
  test: (connect: ApiConnect) => Promise<TestResult>;
  doApi: (apiConfig: ApiConfig) => Promise<ApiResponse>

}
export interface TestResult {
  success: boolean;
  err?: string
}

export class ESHandlerImpl implements ESHandler {
  test = async (connect: ApiConnect) => {
    try{
    const client = new Client(JSON.parse(connect.config));
    return await client.ping()
      .then((response: ApiResponse) => Promise.resolve({ success: response.statusCode == 200 }))
      .catch((error) => Promise.resolve({ success: false, err: error }));
    }catch (error){
      return Promise.resolve({ success: false, err: error })
    }
  }

  //apiConfig 与 替换
  doApi = async (apiConfig: ApiConfig) => {
    const apiConnect=await ApiConnectDao.findById(apiConfig.connectId);
    if(apiConnect){
      const client = new Client(JSON.parse(apiConnect.config));
      return await client.search(JSON.parse(apiConfig.body))
    }
    throw new Error("")
  }
}





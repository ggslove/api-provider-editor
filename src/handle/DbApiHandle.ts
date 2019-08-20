import ApiConfig from '../entity/ApiConfig.entity';
import ApiConnect from '../entity/ApiConnect.entity';
import ApiConnectDao from '../dao/ApiConnect.dao';
interface DBHandler {
  test: (connect: ApiConnect) => Promise<TestResult>;
}
export interface TestResult {
  success: boolean;
  err?: string
}

export class ESHandlerImpl implements DBHandler {
  test = async (connect: ApiConnect) => {
    return Promise.resolve({ success: false, err: "error" })
    // try{
    
    // return await client.ping()
    //   .then((response: ApiResponse) => Promise.resolve({ success: response.statusCode == 200 }))
    //   .catch((error) => Promise.resolve({ success: false, err: error }));
    // }catch (error){
    //   
    // }
  }
}





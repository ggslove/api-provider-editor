import Router from 'koa-router';
import ApiConnectDao from '../dao/ApiConnect.dao';
import ApiConfigDao from '../dao/ApiConfig.dao';
import ApiConnect from '../entity/ApiConnect.entity';
import {contextPath} from '../config/Config';
import HttpStatus from '../config/HttpStatus';


const routerOpts: Router.IRouterOptions = {
  prefix: `/${contextPath}/apiconnect`,
};

const router = new Router(routerOpts);

//增加
router.post("/", async ctx => {
  ctx.body = await ApiConnectDao.save(ctx.request.body as ApiConnect);
  ctx.status=HttpStatus.CREATED;//创建
})

//测试连接
router.post("/test",async ctx=>{
  const testResult=await ApiConnectDao.test(ctx.request.body as ApiConnect);
  ctx.body=testResult;
});

//修改
router.put("/:id",async ctx=>{
  const id=ctx.params.id;
  ctx.body=await ApiConnectDao.update(id,ctx.request.body as ApiConnect)
  ctx.status=HttpStatus.OK;//创建
})

router.get("/:id",async ctx=>{
  const id=ctx.params.id;
  ctx.body=await ApiConnectDao.findById(id);
  ctx.status=HttpStatus.OK;
})
//删除
router.delete("/:ids",async ctx=>{
  //ctx.body=ApiConfigDao.findByConnectId
})

//获取所有配置
router.get("/:id/list",async ctx=>{
  const connectId=ctx.params.id;
  ctx.body=await ApiConfigDao.findByConnectId(connectId);
  ctx.status
})

export  default router;
import  Router from  'koa-router';
import {contextPath} from '../config/Config';
import HttpStatus from '../config/HttpStatus';

const routerOpts: Router.IRouterOptions = {
  prefix: `/${contextPath}/doApi`,
};
const router: Router = new Router(routerOpts);

router.post("/ES/",async(ctx)=>{
  ctx.body="doApi-get-es";
  ctx.status=HttpStatus.OK;
})

router.post("/DB/",async(ctx)=>{
  ctx.body="doApi-get-db";
  ctx.status=HttpStatus.OK;
})

export default router;

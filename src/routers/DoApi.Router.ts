import  Router from  'koa-router';
import {contextPath} from '../config/Config';
import HttpStatus from '../config/HttpStatus';

const routerOpts: Router.IRouterOptions = {
  prefix: `/${contextPath}/doApi`,
};
const router: Router = new Router(routerOpts);

router.post("/ES/",async(ctx)=>{
  ctx.body="doApi-get-es"
})

router.post("/DB/",async(ctx)=>{
  ctx.body="doApi-get-db"
})

export default router;

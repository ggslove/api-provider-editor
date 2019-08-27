import Router from 'koa-router';

function Atest():Function {
  return (  target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor):PropertyDescriptor=>{
      return propertyDesciptor;
  }
}

const routerOpts: Router.IRouterOptions = {
  prefix: `/aaa/apiconfig`,
};

const router = new Router(routerOpts);

router.post("/1", async ctx => {
  ctx.body = "aa";
  ctx.status = 200;
});

router.get("/s", async ctx => {
  ctx.body = "aa";
  ctx.status = 200;
});

router.get("/s1", async ctx => {
  ctx.body = "aa";
  ctx.status = 200;
});
const fn=router.routes();
const routers=Reflect.get(fn, 'router', null);
const stack=Reflect.get(routers, 'stack', null); 


console.log(stack);
//如果我加入了joi属性，然后需要从这里取出来
console.log(stack.length);
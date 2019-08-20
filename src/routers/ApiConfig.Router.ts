import Router from 'koa-router';
import ApiConfigDao from '../dao/ApiConfig.dao';
import ApiConfig from '../entity/ApiConfig.entity';
import {contextPath} from '../config/Config';
import HttpStatus from '../config/HttpStatus';


const routerOpts: Router.IRouterOptions = {
  prefix: `/${contextPath}/apiconfig`,
};

const router = new Router(routerOpts);

router.post("/", async ctx => {
  ctx.body = await ApiConfigDao.add(ctx.request.body as ApiConfig);
  ctx.status = HttpStatus.CREATED;
})
//@ts-ignore
// const  parsePostData=( ctx )=> {
//   return new Promise((resolve, reject) => {
//     try {
//       let postdata = "";
//       //@ts-ignore
//       ctx.req.addListener('data', (data) => {
//         postdata += data
//       })
//       ctx.req.addListener("end",function(){
//         let parseData = parseQueryStr( postdata )
//         resolve( parseData )
//       })
//     } catch ( err ) {
//       reject(err)
//     }
//   })
// }

// 将POST请求参数字符串解析成JSON
// function parseQueryStr( queryStr:string ) {
//   let queryData = {}
//   let queryStrList = queryStr.split('&')
//   console.log( queryStrList )
//   //@ts-ignore
//   for (  let [ index, queryStr ] of queryStrList.entries()  ) {
//     let itemList = queryStr.split('=')
//     //@ts-ignore
//     queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
//   }
//   return queryData
// }

router.get("/:id", async ctx => {
  ctx.body = await ApiConfigDao.findOne(ctx.id)
})

router.put("/:id", async ctx => {

})
export default router;  
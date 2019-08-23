import Koa from 'koa';
import db from './database/db.connection';
import initRouter from '@zhili/server-util/src/init/initRouter';
const app = new Koa();


initRouter(app);
db.then(() => {
  app.listen(3000, () => {
    console.log(`🚀 Server ready at http://localhost:3000`)
  })
});





sudo EXTERNAL_URL="http://gitlab.zhili-tech.com" yum install -y gitlab-ee



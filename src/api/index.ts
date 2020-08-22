import { apiVersion } from 'config/variables';
import Koa from 'koa';
import Router from 'koa-router';
import graphqlRouter from './graphql/graphql.routes';

const registerRouters = (app: Koa): Koa => {

  const router = new Router({
    prefix: `/api/${apiVersion}`,
  });

  router.use(graphqlRouter());

  app
    .use(router.routes())
    .use(router.allowedMethods());

  return app;

};

export default registerRouters;

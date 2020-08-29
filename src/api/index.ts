import { apiVersion } from 'config/variables';
import Koa from 'koa';
import Router from 'koa-router';
import { graphqlSubRouter } from './graphql/graphql.routes';

const registerRouters = (app: Koa): Koa => {

  const router = new Router({
    prefix: `/${apiVersion}`,
  });

  router.use(graphqlSubRouter());

  app
    .use(router.routes())
    .use(router.allowedMethods());

  return app;

};

export default registerRouters;

import { Context, Next } from 'koa';

const authenticated = async (ctx: Context, next: Next): Promise<void> => {

  try {

    // Get the bearer token
    const token = ctx.get('Authorization').replace('Bearer ', '') as string;

    // Handle authentication logic here
    const authenticatedUser = {};

    // Attach the found user and current token to the response
    ctx.state.authenticated = {
      user: authenticatedUser, token
    };

  } catch (error) {

    ctx.throw(error);

  }

  await next();

};

export default authenticated;

import configServer from 'config/server';
import requestSetUp from 'supertest';
import { getFreshToken } from './fixtures/helper';
import { setUpDb, tearDownDb } from './fixtures/setup';

const server = configServer();
const request = requestSetUp(server.callback());

// Setup
beforeAll(setUpDb);
afterAll(tearDownDb);

test('Should only be able to make a post request to graphql endpoint', async () => {

  // Get fresh token
  const { token } = await getFreshToken(request);

  const query = `
    query {
        users(orderBy: id) {
          id
          email
          
          tokens {
            id
            token
          }
      
        }
    }`;

  // Access profile page sending the token
  const response = await request.get('/api/v1/graphql')
    .send({
      query
    })
    .set('Authorization', `Bearer ${token}`);

  //  Not authorized GET action
  expect(response.status).toBe(405);

});

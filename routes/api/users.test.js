// Access supertest module functionality under the variable name "request"
const request = require('supertest');

// Top level of this test suite: the entire user API
describe('The User API', () => {
  // Specific test
  it('Return a list of all users', async () => {
  // connect to the server and get a response
  // expect that response to be a 200 and server JSON
    const res = await request('http://localhost:3000')
      .get('/api/users/list')
      .expect(200)
      .expect('Content-Type', /json/);
    // these expects are jest, not supertest
    // first expect to geta result that is a an array
    expect(Array.isArray(res.body)).toBe(true);
    // second expect the array to have something in it
    expect(res.body.length).toBeGreaterThan(0);
    // third expect the username of the first returned user to be admin
    expect(res.body[0].username).toBe('admin');
  });
});

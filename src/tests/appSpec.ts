import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
describe('Test endpoint responses', () => {
	it('gets the WelcomePage endpoint', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});
	it('get the processing images endpoint', async () => {
		const response = await request.get('/api/images');
		expect(response.status).toBe(200);
	});
	it('It should Process image', async () => {
		const response = await request.get(
			'/api/images?filename=fjord&width=200&height=200'
		);
		expect(response.status).toBe(200);
	});
});

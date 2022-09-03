import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('when checking the image params values', () => {
	it('when gets invalid or missing params', async () => {
		const response = await request
			.get('/api/images')
			.query({ width: '400', height: '300' });
		expect(response.headers['content-type']).toContain('html');
	});
	it('when gets valid params', async () => {
		const response = await request
			.get('/api/images')
			.query({ filename: 'fjord', width: '400', height: '300' });
		expect(response.headers['content-type']).toEqual('image/jpeg');
	});
});

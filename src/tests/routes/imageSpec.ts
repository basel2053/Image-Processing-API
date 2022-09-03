import supertest from 'supertest';
import app from '../../app';
import resizeImage from '../../utilities/editimage';

const request = supertest(app);

describe('when the processing an image', () => {
	it('when image is not found', async () => {
		const response = await request
			.get('/api/images')
			.query({ filename: 'hello world', width: '280', height: '200' });
		expect(response.statusCode).toBe(404);
	});

	it('ensure getting correct image', async () => {
		const editedImage = await resizeImage('encenadaport', 280, 200);
		expect(editedImage).toEqual('encenadaport_280_200.jpg');
	});
});

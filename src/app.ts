import express from 'express';
import imageRoutes from './routes/image';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response): void => {
	res.send(`<h1>Welcome To The image Processing API</h1>`);
});

app.use('/api', imageRoutes);

app.listen(port, (): void => {
	console.log(`server is running successfully on port ${port}`);
});

export default app;

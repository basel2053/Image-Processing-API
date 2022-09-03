import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import checkImage from '../middleware/checkimage';
import { query } from 'express-validator';
import resizeImage from '../utilities/editimage';

const router = express.Router();

router.get(
	'/images',
	[
		query('filename', 'the filename is missing').isString().notEmpty(),
		query('width', 'Please enter a numeric width within 1-2000')
			.isNumeric()
			.notEmpty()
			.isInt({ min: 1, max: 2000 }),
		query('height', 'Please enter a numeric height within 1-2000')
			.isNumeric()
			.notEmpty()
			.isInt({ min: 1, max: 2000 }),
	],
	checkImage,
	async (req: express.Request, res: express.Response): Promise<void> => {
		try {
			const imageName = req.query.filename as string;
			const imageWidth = Number(req.query.width);
			const imageHeight = Number(req.query.height);
			await fs.mkdir('./images/thumb', { recursive: true });
			const editedImage = await resizeImage(imageName, imageWidth, imageHeight);
			res.sendFile(
				path.join(__dirname, '..', '..', 'images', 'thumb', editedImage)
			);
		} catch (error) {
			console.log(error);
		}
	}
);

export default router;

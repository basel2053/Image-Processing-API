import fs from 'fs';
import path from 'path';
import express from 'express';
import { validationResult } from 'express-validator';

const checkImage = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
): void => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.send(`<h1>Please Enter Valid Params ( ${errors.array()[0].msg} )</h1>`);
	}
	const image = `${req.query.filename}_${req.query.width}_${req.query.height}.jpg`;
	if (fs.existsSync(`./images/thumb/${image}`)) {
		res.sendFile(
			path.join(__dirname, '..', '..', 'images', 'thumb', image),
			(error: Error): void => {
				if (error) {
					console.log(error);
				}
			}
		);
	}
	next();
};

export default checkImage;

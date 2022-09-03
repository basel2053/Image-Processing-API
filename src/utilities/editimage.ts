import sharp from 'sharp';

const resizeImage = async (
	filename: string,
	width: number,
	height: number
): Promise<string> => {
	const editedImage = `${filename}_${width}_${height}.jpg`;
	await sharp(`./images/${filename}.jpg`)
		.resize(width, height)
		.toFile(`./images/thumb/${editedImage}`)
		.catch((err: Error) => {
			console.log(err);
		});
	return editedImage;
};

export default resizeImage;

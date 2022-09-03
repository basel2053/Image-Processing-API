"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const checkimage_1 = __importDefault(require("../middleware/checkimage"));
const express_validator_1 = require("express-validator");
const editimage_1 = __importDefault(require("../utilities/editimage"));
const router = express_1.default.Router();
router.get('/images', [
    (0, express_validator_1.query)('filename', 'the filename is missing').isString().notEmpty(),
    (0, express_validator_1.query)('width', 'Please enter a numeric width within 1-2000')
        .isNumeric()
        .notEmpty()
        .isInt({ min: 1, max: 2000 }),
    (0, express_validator_1.query)('height', 'Please enter a numeric height within 1-2000')
        .isNumeric()
        .notEmpty()
        .isInt({ min: 1, max: 2000 }),
], checkimage_1.default, async (req, res) => {
    try {
        const imageName = req.query.filename;
        const imageWidth = Number(req.query.width);
        const imageHeight = Number(req.query.height);
        await fs_1.promises.mkdir('./images/thumb', { recursive: true });
        const editedImage = await (0, editimage_1.default)(imageName, imageWidth, imageHeight);
        res.sendFile(path_1.default.join(__dirname, '..', '..', 'images', 'thumb', editedImage));
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const resizeImage = async (filename, width, height) => {
    const editedImage = `${filename}_${width}_${height}.jpg`;
    await (0, sharp_1.default)(`./images/${filename}.jpg`)
        .resize(width, height)
        .toFile(`./images/thumb/${editedImage}`)
        .catch((err) => {
        console.log(err);
    });
    return editedImage;
};
exports.default = resizeImage;

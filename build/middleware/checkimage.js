"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_validator_1 = require("express-validator");
const checkImage = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.send(`<h1>Please Enter Valid Params ( ${errors.array()[0].msg} )</h1>`);
    }
    const image = `${req.query.filename}_${req.query.width}_${req.query.height}.jpg`;
    if (fs_1.default.existsSync(`./images/thumb/${image}`)) {
        res.sendFile(path_1.default.join(__dirname, '..', '..', 'images', 'thumb', image), (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
    next();
};
exports.default = checkImage;

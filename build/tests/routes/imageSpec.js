"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const editimage_1 = __importDefault(require("../../utilities/editimage"));
const request = (0, supertest_1.default)(app_1.default);
describe('when the processing an image', () => {
    it('when image is not found', async () => {
        const response = await request
            .get('/api/images')
            .query({ filename: 'hello world', width: '280', height: '200' });
        expect(response.statusCode).toBe(404);
    });
    it('ensure getting correct image', async () => {
        const editedImage = await (0, editimage_1.default)('encenadaport', 280, 200);
        expect(editedImage).toEqual('encenadaport_280_200.jpg');
    });
});

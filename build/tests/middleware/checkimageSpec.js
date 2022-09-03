"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const request = (0, supertest_1.default)(app_1.default);
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

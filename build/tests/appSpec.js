"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const request = (0, supertest_1.default)(app_1.default);
describe('Test endpoint responses', () => {
    it('gets the WelcomePage endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    it('get the processing images endpoint', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });
    it('It should Process image', async () => {
        const response = await request.get('/api/images?filename=fjord&width=200&height=200');
        expect(response.status).toBe(200);
    });
});

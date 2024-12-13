"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
let token = '';
describe('api', function () {
    it('should return 200', async () => {
        (0, supertest_1.default)(app_1.default)
            .post('/auth/login')
            .send({ username: 'test', password: 'test' })
            .expect(200)
            .end((err, res) => {
            if (err)
                throw err;
            token = res.body.token;
        });
    });
    it('should return 401', () => {
        (0, supertest_1.default)(app_1.default).post('/auth/login').send({ username: 'test', password: 'wrong' }).expect(401);
    });
    it('should return 404', () => {
        (0, supertest_1.default)(app_1.default).post('/auth/login').send({ username: 'wrong', password: 'test' }).expect(404);
    });
    it('should return 200', () => {
        (0, supertest_1.default)(app_1.default).post('/auth/logout').set('Authorization', `Bearer ${token}`).expect(200);
    });
    // ----------------------------------------------
    it('create link', () => {
        (0, supertest_1.default)(app_1.default)
            .post('/links')
            .set('Authorization', `Bearer ${token}`)
            .send({ link: 'com' })
            .expect(200)
            .end((err, res) => {
            expect(res.body.link).toBe('');
            if (err)
                throw err;
        });
    });
    it('get links', () => {
        (0, supertest_1.default)(app_1.default).get('/links').set('Authorization', `Bearer ${token}`).expect(200);
    });
});
//# sourceMappingURL=auth.test.js.map
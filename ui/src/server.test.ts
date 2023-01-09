import {describe, test} from "vitest";
import {expect} from "chai";
import request from "supertest";
import app from "./server";

// describe("user auth", () => {
//     const validateUser = (user: any) => request(app).post("/users").send(user);
//     const validUser = { name: "John Doe", password: "1234" };
//     const invalidUser = { name: "John Doe", password: "123"};
//     test("valid user", async () => {
//         const res = await validateUser(validUser);
//         expect(res.status).toBe(200);
//         expect(res.body).toEqual(validUser);
//     });
// });
// })


describe('GET /users', () => {
    test('should return 200 OK', () => {
        return request(app).get('/users')
            .expect(200);
    });
});


describe('POST /auth', () => {
    const validUser = {userName: "JohnDoe", password: "1234"};
    const invalidUser = {userName: "invalidUser", password: "123"};
    const wrongPassword = {userName: "JohnDoe", password: "123"};
    test('wrong password', () => {
        return request(app)
            .post('/auth')
            .send(wrongPassword)
            .set('Accept', 'application/json')
            .expect(401)
            .expect('wrong password');
    })
    test('invalid user name', () => {
        return request(app)
            .post('/auth')
            .send(invalidUser)
            .set('Accept', 'application/json')
            .expect(401)
            .expect('user name doesnt exist');
    })
    test('validUser', () => {
        return request(app)
            .post('/auth')
            .send(validUser)
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .expect(res =>{
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name');
                expect(res.body).to.have.property('password');
                expect(res.body).to.have.property('userName');
            })
    })
});

describe('POST /random-word', () => {
    test('should return radom word', () => {
        return request(app)
            .post('/random-word')
            .set('Accept', 'application/json')
            .expect('Content-type', /text/)
            .expect(res=>{
            expect(res.text).to.match(/([^\s])+/g)
        })
    })
});
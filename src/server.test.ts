import {describe, expect, test} from "vitest";
import request from "supertest";
import app from "./server";
describe("user validation", () => {
    const validateUser = ({userName,password} : {userName: string, password: string}) => request(app).post("/users").send({userName,password});
    const validUser = {userName: "John Doe", password: "1234"};
    const invalidUser = {userName: "John Doe", password: "123"};
    test("valid user", async () => {
        const res = await validateUser(validUser);
        expect(res.status).toBe(200);
        expect(res.body).toEqual(validUser);
    });
});
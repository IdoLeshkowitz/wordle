import app from "./server";

test("GET /",()=>{
    app.get("/",(req,res)=>{
        expect(res.status).toBe(200);
    });
})
const expect = require("chai").expect
const request = require("supertest")
const server = require("../app")
const app = request.agent(server)


describe("POST request", ()=>{
    describe("creating a post", ()=>{
        it("success should return true", ()=>{
            app.post("/video").send({
             videoUrl :"https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c003/56586d26ae7f447aa84aeee42d163d3c/?VExpiration=1613755056&VSignature=LZspHW4_TB8U-k7ez7VR0w&a=1233&br=3094&bt=1547&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021021911172001018907404641041017&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M3hmdWg5dnQ7MzMzOjczM0ApaWY8Zmk3PGRkN2RoZzw7ZWdkcmlsMW02Y2JgLS1iMTZzczQwNjE0Xy5gNmBiM2A1YmM6Yw%3D%3D&vl=&vr=",
             shares : 100,
             messages : 200,
             likes : 113,
             channels : "jahsminemma",
             description : "he house on the left is Owned by #IceDerulo",
             song : "Teach me how to dougie"
            }).end((err, res)=>{
                expect(res.body).to.a("object")
                expect(res.body.success).to.equal(true)
                expect(res.status).to.equal(200)
            })
        })
    })
})
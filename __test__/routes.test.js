'use strict'

const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);


describe('Server Test', () => {
    it("Home Page Test", async () => {
        const response = await request.get("/");
        expect(response.status).toEqual(200);
      });
})




describe ('Routes Test', () => {
    it('Can Get All Posts', async() => {
        const response = await request.get('/post')

        expect(response.status).toEqual(200)
    } )

    it('Can Get Post A New Post', async() => {
        const response = await  request.post('/post').send({
            postTitle: "unnamed",
            postBody: "unnamed"

        })

        expect(response.status).toEqual(201)
    } )


    it('Can Get One Post', async() => {
        const response = await request.get('/post/1')
        expect(response.status).toEqual(200)

    })

    it('Can Update A Post', async() => {
        const response = await request.put('/post/1').send({
            postTitle: "Yaser",
            postBody: "Hi, TA, I hope you are having a good day."
  
        })
        expect(response.body.postTitle).toEqual("Yaser")
        expect(response.body.postBody).toEqual("Hi, TA, I hope you are having a good day.")
        expect(response.status).toEqual(200)
    })


    it('Can Delete A Post', async() => {
        const response = await request.delete('/post/1')
        expect(response.status).toEqual(204)
    })


})


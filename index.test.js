const request = require("supertest")
const server = require("./index")

describe("API Tests", () => {
  afterAll(() => {
    server.close()
  })

  it("should return the list of films", async () => {
    const response = await request(server).get("/films")
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(7)
  })

  it("should return the list of people", async () => {
    const response = await request(server).get("/people")
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(16)
  })

  it("should return the list of planets", async () => {
    const response = await request(server).get("/planets")
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(7)
  })

  // Add more test cases for other endpoints...

})
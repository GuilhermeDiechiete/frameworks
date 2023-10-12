import { DatabaseMemory } from "./database/database-memory"
import { fastify } from "fastify";

const db = new DatabaseMemory()

const server = fastify()

server.get("/", () => {

})
server.post("/", () => {
    db.create({
        title: "Video 1",
        description: "Esse é o video 01",
        duration: 180
    })
    
})
server.put("/", () => {

})
server.delete("/", () => {

})





server.listen({port: 6000})
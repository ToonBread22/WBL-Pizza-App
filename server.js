const express = require('express')
const app = new express()
const {CosmosClient} = require('@azure/cosmos')
const dbUrl = "https://wbl-db-jojos.documents.azure.com:443/"
const dbKey = "Mdsa09Ws0vwmSnQWR6EmN4PyZL87cI6C486uzLY4kYY4OSVBi56SaId33RXio4RCKNpUhOEl3KMJlVYICk4Ltg=="
//const db = null
const conString = "AccountEndpoint=https://wbl-db-jojos.documents.azure.com:443/;AccountKey=Mdsa09Ws0vwmSnQWR6EmN4PyZL87cI6C486uzLY4kYY4OSVBi56SaId33RXio4RCKNpUhOEl3KMJlVYICk4Ltg==;"
const port = process.env.PORT || 8080
const path = require('path')
const client = new CosmosClient(conString)
const db = client.database("jojos-db")
const container = db.container("test")

app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/build")))

app.get("/hello/:name",async (req,res) => {
    const data = {
        id: Date.now().toLocaleString,
        score: Math.random() * 100,
        name: req.params.name
    }
    container.items.create(data)
        .catch((err) => {console.error(err)})
    const {resources = hellos} = await container.items.query("SELECT * FROM c")
        .fetchAll()
    res.send(JSON.stringify(hellos))
})

app.listen(port,() => {
    console.log("server started")
})

JOhn cena
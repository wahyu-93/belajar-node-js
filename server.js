// percobaan awal
// const data = "testing server"
// console.log(data)

// instal express - npm install i express --save
// port serveer diatas 3000
// port untuk frontend diatas 8000 - 90000

const port = 3033
const express = require("express")
const server = express()
const heroController = require("./controller/hero.controller")
const bodyParser = require('body-parser')

// route
server.use(bodyParser.urlencoded({extended: false}))
server.set("view engine", "ejs")
server.set("views", "view")

server.use("/hero", heroController)

server.use("/", (request, response) => {
    response.send("MAIN SERVER SUCCESS OK!")
})

server.listen(port, () => {
    console.log('server running on ' + port)
})

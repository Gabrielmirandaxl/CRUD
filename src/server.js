const express = require("express")
const path = require("path")

const router = require("./router")
const mongodb = require("./database/connection")

const app = express()


//connection database
mongodb.connect()

//defineding folder static
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


//defineding folder public
app.use(express.static(path.join(__dirname, "public")))

//receive data by method post
app.use(express.urlencoded({ extended: true }))

//router
app.use("/", router)





const port = process.env.port || 8080
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
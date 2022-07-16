const express = require("express")
const path = require("path")

const app = express()


const port = process.env.port || 8080
app.listen(port.at, () => {
  console.log(`Server listening on port ${port}`)
})
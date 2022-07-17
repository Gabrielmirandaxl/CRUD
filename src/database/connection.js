const mongoose = require("mongoose")

function connect(){

mongoose.connect("mongodb://localhost:27017/registered")

const db = mongoose.connection

db.once("open", () => {
  console.log("mongoDB connected")
})

db.on("error", console.error.bind(console, "failed connected mongoDB"))

}

module.exports = {
  connect
}
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  nome: String,
  cpf: String,
  telefone: String,
  email: String,
  cep: String,
  cidade: String,
})

const Model = mongoose.model("users", schema)

module.exports = Model
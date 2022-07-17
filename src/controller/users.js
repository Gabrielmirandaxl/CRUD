const { response } = require("express")
const ClientesModel = require("../model/users")


function create(request, response){
    const {
      nome,
      cpf,
      telefone,
      email,
      cep,
      cidade,
    } = request.body

    const register = new ClientesModel({
      nome,
      cpf,
      telefone,
      email,
      cep,
      cidade,
    })

    register.save()


  response.redirect("/cadastrar")
}

async function read (request, response) {

  const users = await ClientesModel.find()

  response.render("list", {
   title: "Listar usuários",
   users
  })
}

async function formUpdate(request, response){

 const { id } = request.query

 const user = await ClientesModel.findById(id)
 

  response.render("update", {
    title: "Update",
    user,
  })

}

async function update(request, response){
 
  const {
    nome,
    cpf,
    telefone,
    email,
    cep,
    cidade,
  } = request.body

  const { id } = request.params

  const user = await ClientesModel.findById(id)
  
  user.nome = nome
  user.cpf = cpf
  user.telefone = telefone
  user.email = email
  user.cep = cep
  user.cidade = cidade

  user.save()

response.redirect("/list")

}

async function remove(request, response){
  const { id } = request.params

  const remove = await ClientesModel.deleteOne({_id: id})

  if(remove){
    response.redirect("/list")
  }
}

module.exports = {
  create,
  read,
  formUpdate,
  update,
  remove,
}

const router = require("express").Router()
const ClientesController = require("../controller/users")

router.get("/", (request, response) => {
  response.render("index", {
    title: "Home",
  })
})

router.get("/cadastrar", (request, response) => {
  response.render("cadastro", {
    title: "Cadastro",
  })
})

router.post("/cadastrar/add", ClientesController.create)

router.get("/list", ClientesController.read)

router.get("/update", ClientesController.formUpdate )

router.post("/update/:id", ClientesController.update)

router.get("/delete/:id", ClientesController.remove)

router.use((request, response) => {
  response.send("página não encontrada")
})


module.exports = router
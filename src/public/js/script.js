let formRegister = document.querySelector('.form')

let cpf = document.querySelector('.cpf')
let telefone = document.querySelector(".telefone")
let cep = document.querySelector(".cep")

formRegister.addEventListener("submit", validationRegister)

cpf.addEventListener("keypress", function(){
  let cpfInput = cpf.value.length
 

  if(cpfInput === 3){
    cpf.value += "."
  }

  if(cpfInput === 7){
    cpf.value += "."
  }

  if(cpfInput === 11){
    cpf.value += "-"
  }
})


telefone.addEventListener("keypress", function(){
  let telefoneInput = telefone.value.length

  if(telefoneInput === 0){
    telefone.value += "("
  }

  if(telefoneInput === 3){
    telefone.value += ")"
  }

  if(telefoneInput === 9){
    telefone.value += "-"
  }
})

cep.addEventListener("keypress", function() {
  let cepInput = cep.value.length

  if(cepInput === 5){
    cep.value += "-"
  }
})



//validation
function validationRegister(e){
 e.preventDefault()

 let erro = false
//inputNome

let inputNome = document.querySelector(".nome").value

if(!inputNome){
  document.querySelector(".nome").classList.add('error')
  erro = true
}
else{
  document.querySelector(".nome").classList.remove('error')
}

//inputCpf
let inputCpf = document.querySelector(".cpf").value

if(inputCpf.length < 14){
  document.querySelector(".cpf").classList.add('error')
   erro = true
}
else if(inputCpf.length === 14){
  document.querySelector(".cpf").classList.remove('error')
}


//inputTelefone
let inputPhone = document.querySelector(".telefone").value

if(!inputPhone){
  document.querySelector(".telefone").classList.add('error')
  erro = true
}
else{
  document.querySelector(".telefone").classList.remove('error')
}


//inputEmail
let inputEmail = document.querySelector(".email").value

if(!inputEmail){
  document.querySelector(".email").classList.add('error')
  erro = true
}
else{
  document.querySelector(".email").classList.remove('error')
}

//inputCep
let inputCep = document.querySelector(".cep").value

if(!inputCep){
  document.querySelector(".cep").classList.add('error')
  erro = true
}
else{
  document.querySelector(".cep").classList.remove('error')
}


//inputCidade
let inputCidade = document.querySelector(".cidade").value

if(!inputCidade){
  document.querySelector(".cidade").classList.add('error')
  erro = true
}
else{
  document.querySelector(".cidade").classList.remove('error')
}



if(!erro){
  formRegister.submit()
}
else{
  alert("Preencha todos os campos")
}

}
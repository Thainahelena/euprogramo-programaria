function validaFormulario(){
  if(document.getElementById("nome").value != "" &&  document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
  alert("Perfeito! Você receberá nossa confirmação por email!")
  }
  else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
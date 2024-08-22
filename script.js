function enviarFormulario() {
    var contaCliente = new Object();

    contaCliente.Nome = document.getElementById('Nome').value;
    contaCliente.CPF = document.getElementById('CPF').value;
    contaCliente.Genero = document.getElementById('Genero').value;
    contaCliente.Data = document.getElementById('Data').value;
    contaCliente.Nacionalidade = document.getElementById('Nacionalidade').value;
    contaCliente.Email = document.getElementById('Email').value;
    contaCliente.Numero = document.getElementById('Numero').value;
    contaCliente.Destino = document.getElementById('Destino').value;

    var myJson = JSON.stringify(contaCliente)
    console.log(myJson)
    console.log(contaCliente.valueOf())
   



}
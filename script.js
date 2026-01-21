const botaoBuscar = document.getElementById("buscarbtn");
const listaUsuarios = document.getElementById("listar-usuarios");
const mensagem = document.getElementById("mensagem");
const inputId = document.getElementById("userId");



function buscarUsuarios(){
    const idDigitado = inputId.value;
    if (idDigitado === "") {
    mensagem.textContent = "Digite um ID";
}
    listaUsuarios.innerHTML = "";
    fetch("https://dummyjson.com/users")
    .then(resposta =>{
        return resposta.json();
    })
    .then(dados =>{
        const usuario = dados.users.find(user => user.id == idDigitado);

        if(!usuario){
            mensagem.textContent = "Usuário não encontrado";
            return;
        }

        mensagem.textContent = "";

        listaUsuarios.innerHTML = `
            <div class="usuario">
                <h3>${usuario.firstName} ${usuario.lastName}</h3>
                <p>Email: ${usuario.email}</p>
                <p>Idade: ${usuario.age}</p>
             </div>
            `;  
        

    })
    .catch(erro =>{
        console.log('Erro:', erro.message)
    })
}

botaoBuscar.addEventListener("click", buscarUsuarios);
let usuarios = []
if (localStorage.getItem('cadastrados')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))

function login() {
    let cpf_storage = document.getElementById('cpf').value
    let senha_storage = document.getElementById('senha').value

    if (procura_usuario(cpf_storage, senha_storage) !== -1) {
        alert("Usuário validado! Bem-vindo!")
        location.assign('home.html')
    } else {
        alert("Usuário não validado!")
    }
}

function procura_usuario(cpf_storage, senha_storage) {
    let index = usuarios.findIndex((element) => {
        return element.cpf === cpf_storage && element.senha === senha_storage
    })

    return index
}

let btn_cpf = document.querySelector('#cpf')
let btn_senha = document.querySelector('#senha')


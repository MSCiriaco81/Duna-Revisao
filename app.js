// Função para inicializar o banco de dados no localStorage
function banco() {
    if (!localStorage.getItem("bd")) {
        const bd = [
            { id: 1, nome: "Paul", login: "Atreides", senha: "duna", email: "paul@gmail.com" },
            { id: 2, nome: "Chani", login: "Chani", senha: "duna", email: "chani@gmail.com" },
            { id: 3, nome: "Jessica", login: "Lady", senha: "duna", email: "jessica@gmail.com" }
        ];
        let json = JSON.stringify(bd);
        localStorage.setItem("bd", json);
    }
}

// Função para realizar o login
function login(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let bd = JSON.parse(localStorage.getItem("bd")) || []; // Recupera o banco de dados ou inicializa como array vazio
    let lg = document.querySelector("#login").value;
    let sn = document.querySelector("#senha").value;
    let loggedIn = false;

    // Verifica se o login e a senha correspondem a algum usuário
    for (let i = 0; i < bd.length; i++) {
        if (lg === bd[i].login && sn === bd[i].senha) {
            alert("Logado com sucesso!");
            window.location.href = "sobre.html"; // Redireciona para a página "sobre.html"
            loggedIn = true;
            break; // Sai do loop assim que encontrar o usuário
        }
    }

    // Se o login falhar, exibe uma mensagem de erro
    if (!loggedIn) {
        alert("Login ou senha incorretos!");
    }
}

// Vincula o evento de submit ao formulário de login
document.getElementById("loginForm").addEventListener("submit", login);

// Função para adicionar um novo usuário
function adicionar(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Recupera o banco de dados do localStorage ou inicializa como array vazio
    let bd = JSON.parse(localStorage.getItem("bd")) || [];

    // Obtém os valores dos campos do formulário
    let nm = document.querySelector("#nome").value;
    let lg = document.querySelector("#login").value;
    let sn = document.querySelector("#senha").value;
    let mail = document.querySelector("#email").value;

    // Verifica se todos os campos foram preenchidos
    if (!nm || !lg || !sn || !mail) {
        alert("Por favor, preencha todos os campos.");
        return; // Impede a execução do restante da função se algum campo estiver vazio
    }

    // Verifica se o login já existe
    for (let i = 0; i < bd.length; i++) {
        if (lg === bd[i].login) {
            alert("Login já existe! Escolha outro.");
            return; // Impede a execução do restante da função se o login já existir
        }
    }

    // Cria o novo usuário
    let user = { id: Date.now(), nome: nm, login: lg, senha: sn, email: mail };

    // Adiciona o novo usuário ao banco de dados
    bd.push(user);

    // Atualiza o localStorage com o novo banco de dados
    let json = JSON.stringify(bd);
    localStorage.setItem("bd", json);

    // Exibe uma mensagem de sucesso
    alert("Registro adicionado com sucesso!");

    // Limpa os campos do formulário
    document.querySelector("#nome").value = "";
    document.querySelector("#login").value = "";
    document.querySelector("#senha").value = "";
    document.querySelector("#email").value = "";

    // Redireciona para a página de login
    window.location.href = "login.html";
}

// Vincula o evento de submit ao formulário de cadastro
document.getElementById("cadastroForm").addEventListener("submit", adicionar);

// Função para redirecionar para a página de cadastro
function cd() {
    window.location.href = "cadastro.html";
}

// Função para redirecionar para a página de login
function lg() {
    window.location.href = "login.html";
}
const passwordBox = document.getElementById("senha");
const tamanhogerador = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "<>!@#$%";

const allcaracter = upperCase + LowCase + number + symbol;

function criarSenha(){
    let senha = "";
    senha += upperCase[Math.floor(Math.random() * upperCase.length)];
    senha += LowCase[Math.floor(Math.random() * LowCase.length)];
    senha += number[Math.floor(Math.random() * number.length)];
    senha += symbol[Math.floor(Math.random() * symbol.length)];

    while(tamanhogerador > senha.length){
        senha += allcaracter[Math.floor(Math.random() * allcaracter.length)];
    }

    passwordBox.value = senha;
}

function copiarSenha(){
    passwordBox.select();
    document.execCommand("copy")
}

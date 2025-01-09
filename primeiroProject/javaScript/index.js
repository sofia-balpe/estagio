

/*const minhaUrl = document.URL;
document.write(minhaUrl);

var var1 = 0;
document.write(typeof var1);
while (var1 <= 10) {
    document.write('<br>linha </br>' + var1 + '\n');
    var1++;
}

switch (variavel = "Qualquer coisa") {
    case 1:
        document.write('Opção 1');
        break;
    case 2:
        document.write('Opção 2');
    default:
        document.write('Padrão');
        break;
}

var myArray = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis'];
myArray.forEach(function (value, key) {
    if (key == [2] || key == [3]) {
        console.log(value, key);
    }

});

console.log(myArray[2]);

const var4 = 'teste';
const var5 = 'teste2';

function minhaFuncao(varx, vary) {//vai dar indefinido pois essa variável na verdade é uma nova variável que foi declarada
    console.log(varx + "\n" + vary);
}
minhaFuncao(var4, var5);

const tamanho = myArray.push('sete');//criar uma variável antes exibe um retorno de quantos elementos tem no array
console.log(tamanho);
//  minhaFuncao(var5);*/

window.onload = (event) => {
    var submit = document.getElementById('submitId');
    console.log(submit);
};

function onLogin() {

   onLogin.class = submitId;
    var email = document.getElementById('idEmail');
    var senha = document.getElementById('idSenha');

    txtEmail = email.value;
    txtSenha = senha.value;

    if (txtEmail.trim() != "") {
        console.log('Email não é nula');
       
    }
    else {
        console.log('Email nulo')
       email.placeholder = "Preencha o campo email"

    }
    if (txtSenha.trim() != "") {
        console.log('Senha não é nula');
        
    }
    else{
        console.log('Senha Nula');
        senha.placeholder = "Preencha o campo senha"
    }

    if (txtEmail.trim() != "" && txtSenha.trim() != "") {
      alert("Sucesso!");
      senha.classList.add("sucess");
      email.classList.add("sucess");
      senha.classList.remove("erro");
      email.classList.remove("erro");
    }
    else{
        alert("campos incorretos");
        email.classList.add("erro");
        email.classList.remove("sucess");
        senha.classList.add("erro");
        senha.classList.add("erro");
        
    }
}

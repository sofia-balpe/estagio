

const minhaUrl = document.URL;
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
//  minhaFuncao(var5);

window.onload = (event) => {
    var submit = document.getElementById('submitId');
    console.log(submit);
};

function onLogin() {

   onLogin.class = submitId;
    var txtOpcao = document.getElementById('idOp');
    var nomeInstrumento = document.getElementById('idInstrumento');

    opcao = txtOpcao.value;
    nomeIns = nomeInstrumento.value;

    if (opcao.trim() != "") {
        console.log('Opção não é nula');
        txtOpcao.classList.add("sucess");
        txtOpcao.classList.remove("erro");
    }
    else {
        console.log('Opção nula')
        txtOpcao.classList.add("erro");
        txtOpcao.classList.remove("sucess");

    }
    if (nomeIns.trim() != "") {
        console.log('Nome do INstrumento não é nulo');
        nomeInstrumento.classList.add("sucess");
        nomeInstrumento.classList.remove("erro");
    }
    
    else{
        console.log('Nome do instrumento nulo');
        nomeInstrumento.class = "erro";
        nomeInstrumento.classList.add("erro");
        nomeInstrumento.classList.remove("sucess");
    }

    if (opcao.trim() != "" && nomeIns.trim() != "") {
      alert("Sucesso!");
    }
    else{
        alert("campos incorretos");

    }
}

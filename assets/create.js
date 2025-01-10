var pessoas = [
    { name: "Nome", senha: "Senha", email: "Email" }
]
window.onload = () => {

    //chamar a função para renderizar a tabela quando a página é recarregada
    renderTable(); 
    
    //Cabeçalho
    var thead = document.querySelector('#tabela thead');

    keys = Object.keys(pessoas[0])
    var tr = document.createElement('tr')

    keys.forEach(key => {
        var cel = document.createElement('th')
        cel.textContent = key
        tr.appendChild(cel)
    })
    thead.appendChild(tr);

    //Células
    document.getElementById('idForm').addEventListener('submit', function (event) {
        event.preventDefault();//Não vai recarregar pois está fora do contexto, aqui ela vai ficar add toda vez

        var tdName = document.getElementById('idUser').value
        var tdSenha = document.getElementById('idSenha').value
        var tdEmail = document.getElementById('idEmail').value

        var listaUsers = JSON.parse(localStorage.getItem('users'))
        if (listaUsers == null) {
            listaUsers = [];
        }

        user = {
            nome: tdName,
            senha: tdSenha,
            email: tdEmail
        }

        listaUsers.push(user)
        localStorage.setItem('users', JSON.stringify(listaUsers))
        renderTable();
    })

    //função para renderizar a tabela
    function renderTable() { 
        var tbody = document.querySelector('#tabela tbody');

        tbody.innerHTML = "";//não deixa copiar o que tava escrito antes na tabela
        console.log(tbody)

        lista = JSON.parse(localStorage.getItem('users'))
        lista.forEach(pessoa => {
            var tr = document.createElement('tr')

            var tdNome = document.createElement('td')
            tdNome.textContent = pessoa.nome
            tr.appendChild(tdNome)

            var tdSenha = document.createElement('td')
            tdSenha.textContent = pessoa.senha
            tr.appendChild(tdSenha)

            var tdEmail = document.createElement('td')
            tdEmail.textContent = pessoa.email
            tr.appendChild(tdEmail)

            tbody.appendChild(tr);
        })
    }
};
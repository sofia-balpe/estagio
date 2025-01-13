window.onload = () => {

    renderTable();

    document.getElementById('idForm').addEventListener('submit', function (event) {
        var tdnome = document.getElementById('idNome').value
        var tdemail = document.getElementById('idEmail').value
        var tdsenha = document.getElementById('idSenha').value

        var listaUs = JSON.parse(localStorage.getItem('users'))
        if (listaUs == null) {
           listaUs = [] 
        }

        user ={
            nome: tdnome,
            email: tdemail,
            senha: tdsenha
        }

        listaUs.push(user)
        localStorage.setItem('users', JSON.stringify(listaUs))
        console.log(listaUs)

        renderTable();
    })

    //Função para renderizar a tabela

    function renderTable(){
        var tbody = document.querySelector('#idTabela tbody')
        tbody.innerHTML = ""

        lista = JSON.parse(localStorage.getItem('users'))

        lista.forEach(element => {

            var tr = document.createElement('tr')

            var tdNome = document.createElement('td')
            tdNome.textContent = element.nome
            tr.appendChild(tdNome)

            var tdEmail = document.createElement('td')
            tdEmail.textContent = element.email
            tr.appendChild(tdEmail)

            var tdSenha = document.createElement('td')
            tdSenha.textContent = element.senha
            tr.appendChild(tdSenha)

            tbody.appendChild(tr);
        });
    }
}
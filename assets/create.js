window.onload = () => {

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
    var tbody = document.querySelector('#tabela tbody');

    pessoas.forEach(pessoa => {

        var tr = document.createElement('tr')

        var tdName = document.createElement('td')
        tdName.textContent = pessoa.name
        tr.appendChild(tdName);

        var tdIdade = document.createElement('td')
        tdIdade.textContent = pessoa.idade
        tr.appendChild(tdIdade);

        var tdData = document.createElement('td')
        tdData.textContent = pessoa.data
        tr.appendChild(tdData);


        tbody.appendChild(tr);
    })

    
    
};
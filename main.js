const form = document.getElementById('form-atividade');
let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');



    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value >= 1111111111 ? 'Salvo' : 'Digite um numero valido'}</td>`;
    linha += '</tr>'

    linhas += linha;

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value  = '';

})
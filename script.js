function adicionarContato() {
    const tabela = document.getElementById('tabela-contatos');
    const tbody = tabela.getElementsByTagName('tbody')[0];

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela
    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell();
    const celulaTelefone = novaLinha.insertCell();

    // Adiciona os dados às células
    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
const produtoForm = document.getElementById('produtoForm');
    const listaProdutos = document.getElementById('listaProdutos');
    const produtos = []; // Array para armazenar os produtos

    produtoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const valor = parseFloat(document.getElementById('valor').value).toFixed(2);

        // Adicionar o novo produto ao array
        produtos.push({ nome, valor });

        // Ordenar os produtos por valor (do menor para o maior)
        produtos.sort((a, b) => a.valor - b.valor);

        // Atualizar a lista de produtos
        listaProdutos.innerHTML = ''; // Limpar a lista
        produtos.forEach(produto => {
            const novoProduto = document.createElement('li');
            novoProduto.textContent = `${produto.nome} - R$ ${produto.valor}`;
            listaProdutos.appendChild(novoProduto);
        });

    // Limpar campos do formulário
    produtoForm.reset();
});
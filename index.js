const produtoFormu = document.getElementById('produtoFormu');
    const listaProdutos = document.getElementById('listaProdutos');
    const produtos = [];

    produtoFormu.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const valor = parseFloat(document.getElementById('valor').value).toFixed(2);

        produtos.push({ nome, valor });

        produtos.sort((a, b) => a.valor - b.valor);

        listaProdutos.innerHTML = ''; 
        produtos.forEach(produto => {
            const novoProduto = document.createElement('li');
            novoProduto.textContent = `${produto.nome} - R$ ${produto.valor}`;
            listaProdutos.appendChild(novoProduto);
        });

    produtoFormu.reset();
});
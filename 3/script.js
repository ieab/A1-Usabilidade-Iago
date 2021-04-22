const botao = document.querySelector('#btn');

botao.addEventListener("click", function() {
    const produto = document.querySelector('#produto').value;
    if (produto) {
        const lista = document.querySelector('#produtos');
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        item.classList.add('d-flex');
        item.classList.add('justify-content-between');
        item.classList.add('align-items-center');
        const span = document.createElement('span');
        const botaoLista = document.createElement('button');
        document.getElementById('produto').focus();

        item.textContent = produto;
        botaoLista.textContent = 'Excluir';
        lista.appendChild(item);
        item.appendChild(span);
        span.appendChild(botaoLista);

        botaoLista.addEventListener("click", function() {
            lista.removeChild(item);
            item.removeChild(span);
            span.removeChild(botaoLista);
            document.getElementById('produto').focus();
        })

    } else {
        alert("Você não digitou o nome do produto");
    }
});
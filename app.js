// Lista que vai armazenar os nomes
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação: campo vazio ou repetido
    if (nome === "") {
        alert("Digite um nome antes de adicionar!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adiciona o nome e limpa o input
    amigos.push(nome);
    input.value = "";

    // Atualiza a lista de amigos
    atualizarLista();
}

// Função para atualizar a lista exibida
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpa a lista

    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;

        // Botão para remover amigo
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("remove-button");
        botaoRemover.setAttribute("aria-label", `Remover ${nome}`);
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

// Função para remover amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // limpa resultado anterior

    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    // Sorteia um amigo aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const li = document.createElement('li');
    li.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    resultado.appendChild(li);
}

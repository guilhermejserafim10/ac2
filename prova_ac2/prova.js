let imageIndex = 1; // Variável para armazenar o índice da imagem

// Função para adicionar um card
function addCard() {
    const title = document.getElementById("titleInput").value;
    if (title === "") {
        alert("Por favor, insira um título!");
        return;
    }
    
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card", "text-center");

    // Gera uma URL de imagem única usando a API de `picsum.photos` com base no índice
    const imageUrl = `https://picsum.photos/200/200?random=${imageIndex}`;
    imageIndex++; // Incrementa o índice para a próxima imagem ser diferente

    card.innerHTML = `
        <img src="${imageUrl}" class="card-img-top" alt="Imagem do card">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <button class="btn btn-danger" onclick="removeCard(this)">Apagar</button>
        </div>
    `;

    cardContainer.appendChild(card);
    document.getElementById("titleInput").value = "";
}

// Função para remover um card específico
function removeCard(button) {
    const card = button.closest(".card");
    card.remove();
}

// Função para remover todos os cards
function removeAllCards() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    imageIndex = 1; // Reinicia o índice de imagem ao apagar todos os cards
}

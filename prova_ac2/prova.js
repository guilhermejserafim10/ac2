let imageIndex = 1;

function addCard() {
    const title = document.getElementById("titleInput").value;
    if (title === "") {
        alert("Por favor, insira um título!");
        return;
    }
    
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card", "text-center");

    const imageUrl = `https://picsum.photos/200/200?random=${imageIndex}`;
    imageIndex++;
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

function removeCard(button) {
    const card = button.closest(".card");
    card.remove();
}

function removeAllCards() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    imageIndex = 1;
}

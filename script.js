function removeCard(button) {
    const card = button.parentElement;
    card.remove();
}

function showPrompt() {
    document.getElementById('infoModal').style.display = 'flex'; // Changed to 'flex' for centering
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}
function addCard() {
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    const id = document.getElementById('id').value;
    const level = document.getElementById('level').value;

    const newCard = document.createElement('div');
    newCard.classList.add('card');

    newCard.innerHTML = `
        <img src="${photo}" alt="Profile Picture" class="profile-pic">
        <div class="card-details">
            <h2>${name}</h2>
            <p>ID: ${id}</p>
            <p>Level: ${level}</p>
        </div>
        <button class="delete-btn" onclick="removeCard(this)">Delete</button>
    `;

    const cardContainer = document.querySelector('.card-container');
    const addCardElement = document.querySelector('.add-card');

    cardContainer.insertBefore(newCard, addCardElement); // Insert the new card before the "Add (+)" card

    closeModal();
    document.getElementById('addCardForm').reset();
}

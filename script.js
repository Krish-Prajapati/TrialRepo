// Show the prompt modal
function showPrompt() {
    document.getElementById('infoModal').style.display = 'flex';
}

// Close the modal
function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Add a new card based on user input
function addCard() {
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    const id = document.getElementById('id').value;
    const level = document.getElementById('level').value;

    // Create the new card element
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    
    newCard.innerHTML = `
        <img src="${photo}" alt="Profile Picture" class="profile-pic">
        <div class="card-details">
            <h2>${name}</h2>
            <p>ID:${id}</p>
            <p>Level:${level}</p>
        </div>
    `;

    // Append the new card to the card container
    document.querySelector('.card-container').appendChild(newCard);

    // Close the modal
    closeModal();

    // Clear the form
    document.getElementById('addCardForm').reset();
}

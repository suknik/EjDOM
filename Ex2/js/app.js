const userName = document.querySelector('#name');
const userAge = document.querySelector('#age');
const userEmail = document.querySelector('#email');
const saveBtn = document.querySelector('#saveBtn');
const CARD_SECTION = document.querySelector('#profiles');

saveBtn.addEventListener('click', saveData);

function saveData() {
    const card = createCard();
    const userData = createDescription();
    const descriptionData = populateDescriptions(userData);
    renderElements(card, descriptionData);

    CARD_SECTION.append(card);
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card
}

function createDescription () {
    const userData = {
        user_name : document.createElement('h2'),
        user_age : document.createElement('h3'),
        user_email : document.createElement('P')
    }
    return userData;
}

function populateDescriptions(userData) {
    userData.user_name.textContent = userName.value;
    userData.user_age.textContent = userAge.value;
    userData.user_email.textContent = userEmail.value;

    return userData;
}

function renderElements (card, userData) {
    card.append(userData.user_name, userData.user_age, userData.user_email);
}




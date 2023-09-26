console.log("hola");
const title = document.querySelector("#title1");
const secondTitle = document.querySelector('.subtitle');
const subtitle = document.querySelectorAll(".subtitle");

console.log(title)
console.log(subtitle);

secondTitle.innerText = "DOM API";

//Creación del perfil del usuario

const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'algo@gmail.com',
    favFilms: [
        'Spencer',
        'Ice Age 3',
        'Se7ven',
        'Inception',
        'SAW'
    ]
}



function createUser(user) {
    document.querySelector('#username').textContent = user.name;
    document.querySelector('#age').textContent = user.age;
    document.querySelector('#mail').textContent = user.email;
    const ul = document.querySelector('#fav-pelis');
    
    user.favFilms.forEach((film) => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    })
}

createUser(user);

//Evento

const inputName = document.querySelector('#name');
const userName = document.querySelector('#username');
console.log(userName)

inputName.addEventListener('input', e => {
    console.log(inputName.value);
    userName.textContent = e.target.value;
});

const nameBtn = document.querySelector('#nameBtn');

nameBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
})





const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]



////////////////////////////////////////
// - Obtener la info
// - Crear un contenedor de perfil clase = profile
// - crear elemento para User_name
// - "" "" para descripción
// - "" "" para age
// - "" "" para lista de bandas --> iterar por cada banda
////////////////////////////////////////

const CARD_SECTION = document.querySelector('#profiles');

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}

const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        user_age: document.createElement('h3'),
        description: document.createElement('P'),
        bands: []
    }
    return userElements
}

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.user_age.textContent = user.age;
    userElements.description.textContent = user.description;

    const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('P');
        pElement.textContent = e;
        return pElement;
    })
    console.log(bandList);

    userElements.bands = bandList;
    return userElements;
}

const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.user_age, elements.description);
    elements.bands.forEach(e => {
        card.appendChild(e);
    })
}

users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();

    const elementsWithData = populateElements(user, userElements);
    const renderedElements = renderElements(card, elementsWithData)
    console.log(elementsWithData);
    CARD_SECTION.append(card);
})



// EGERSISIO
// 1. Agregar las bandas
// PUSH
// EVITAR LAS BANDAS PARA EL EJERCICIO 2
// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben de tener dos commits
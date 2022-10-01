// grab DOM elements

// set event listeners


const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);

const greeting = document.getElementById('greeting');

nameDisplay.textContent = 'Fred';
nameDisplay.classList.add('purple');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i am clicking the button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
});

const updateLanguage = document.getElementById('update-language');
updateLanguage.addEventListener('click', () => {
    console.log('language selected');
    const language = document.getElementById('Language');
    greeting.textContent = language.value;
});
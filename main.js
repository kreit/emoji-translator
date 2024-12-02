const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function () {
    const inputBox = document.getElementById('translator-input');
    const userInput = inputBox.value;
    const resultsElement = document.getElementById('results');
    const selectedRadio = document.querySelector('input[name="translation-section"]:checked');
    const selectedValue = selectedRadio ? selectedRadio.value : null;

    resultsElement.innerHTML = '';

    if (selectedValue === 'encode') {
        resultsElement.innerText = encode(userInput);
     } else if (selectedValue === 'translate') {
        resultsElement.innerText = translate(userInput);
     } else if (selectedValue === 'madlib') {
        resultsElement.innerText = madlib(userInput);
     } else if (selectedValue === 'search') {
        const searchResults = search(userInput);

        if (searchResults.length === 0) {
            resultsElement.innerText = 'No emojis found.';
        } else {
            searchResults.forEach((emojiObj) => {
                const emojiElement = document.createElement('p');
                emojiElement.innerText = emojiObj.symbol;
                resultsElement.appendChild(emojiElement);
            });
        }

    } else if (selectedValue === 'random') {
        const randomType = Math.floor(Math.random() * 4);
        const randomActions = ['encode', 'translate', 'madlib', 'search'];
        const randomValue = randomActions[randomType];

  
        if (randomValue === 'encode') {
            resultsElement.innerText = encode(userInput);
        } else if (randomValue === 'translate') {
            resultsElement.innerText = translate(userInput);
        } else if (randomValue === 'madlib') {
            resultsElement.innerText = madlib(userInput);
        } else if (randomValue === 'search') {
            const searchResults = search(userInput);

            if (searchResults.length === 0) {
                resultsElement.innerText = 'No emojis found.';
            } else {
                searchResults.forEach((emojiObj) => {
                    const emojiElement = document.createElement('p');
                    emojiElement.innerText = emojiObj.symbol;
                    resultsElement.appendChild(emojiElement);
                });
            }
        }
    }
});


const inputBox = document.getElementById('translator-input');
inputBox.addEventListener('input', function () {
    submitButton.click();
});



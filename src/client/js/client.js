/* Function to handle form on submit */
import isUrl from 'is-url';

function handleSubmit(event) {
    event.preventDefault();

    const userInput = document.getElementById('textToSend').value;
    isUrl(userInput.toString()) ? sendQuery(userInput) : alert("The input is not valid! Please, post a correct URL");
}

async function sendQuery(input) {
    const urlObj = JSON.stringify({'url': input});
    try {
        await fetch('http://localhost:8081/query', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: urlObj
        })
        .then(updateUi());
    }
    catch(error) {
        console.log(error);
    }
}

async function getInfo() {
    const srvData = await fetch('http://localhost:8081/getInfo');
    try {
        const data = await srvData.json();
        return data;
    } catch(error) {
        console.log(`Error while fetching data from server! See error: ${error}`)
    }
}

const updateUi = async () => {
    const data = await getInfo();
    const queryResults = document.getElementById('resultsContainer');
    const infoToAttatch = generateContent(data);
    queryResults.append(infoToAttatch);
}

const generateContent = (json) => {
    const fragment = new DocumentFragment();
    const sentences = json.sentence_list;
    const subjectivity = json.subjectivity;
    const scoreTag = json.score_tag;

    let polarity = '';
    switch(scoreTag) {
        case 'P+':
            polarity = 'strong positive';
            break;
        case 'P':
            polarity = 'positive';
            break;
        case 'NEU':
            polarity = 'neutral';
            break;
        case 'N':
            polarity = 'negative';
            break;
        case 'N+':
            polarity = 'strong negative';
            break;
        case 'NONE':
            polarity = 'none';
            break;
    }
    const newText = document.createElement('h3');
    newText.innerHTML = `Text is <strong>${polarity}</strong> and <strong>${subjectivity.toLowerCase()}</strong>. Here are some example <strong>sentences</strong> from the text:\n`;
    fragment.appendChild(newText);
    
    for (let i = 1; i < 12; i += 2) {
        const item = sentences[i];
        const parag = document.createElement('p');
        parag.innerText = `${item.text}`;
        fragment.appendChild(parag);
    }
    return fragment;
};

export { handleSubmit }

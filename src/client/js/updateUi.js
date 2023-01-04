const updateUi = async () => {
    const data = await Client.getInfo();
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

export { updateUi }

const updateUi = (data) => {
    const queryResults = document.getElementById('resultsContainer');
    const infoToAttatch = generateContent(data);
    queryResults.append(infoToAttatch);

    return 1;
}

const generateContent = (json) => {
    const fragment = document.createDocumentFragment();
    const sentences = json.sentence_list;
    const scoreTag = json.score_tag;
    const subjectivity = json.subjectivity.toLowerCase();

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

    const newHeader = document.createElement('h3');
    newHeader.innerHTML = `Text is <strong>${polarity}</strong> and <strong>${subjectivity}</strong>. Here are some example <strong>sentences</strong> from the text:\n`;
    fragment.appendChild(newHeader);
   
    for (let i = 1; i < 10; i += 2) {
        const parag = document.createElement('p');
        parag.innerText = sentences[i].text;
        fragment.appendChild(parag);
    }

    return fragment;
};

export { 
    updateUi
}

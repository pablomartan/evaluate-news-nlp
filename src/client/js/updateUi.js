const updateUi = async (data) => {
    const queryResults = document.getElementById('resultsContainer');
    const infoToAttatch = await generateContent(data);
    queryResults.append(infoToAttatch);
}

const generateContent = (json) => {
    const fragment = document.createDocumentFragment();
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
    const newHeader = document.createElement('h3');
    newHeader.innerHTML = `Text is <strong>${polarity}</strong> and <strong>${subjectivity.toLowerCase()}</strong>. Here are some example <strong>sentences</strong> from the text:\n`;
    fragment.appendChild(newHeader);
   
    for (let i = 1; i < 10; i += 2) {
        const parag = document.createElement('p');
        parag.innerText = sentences[i].text;
        fragment.appendChild(parag);
    }

    return fragment;
};

export { 
    updateUi,
    generateContent
}

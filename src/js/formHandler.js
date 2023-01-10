import isUrl from 'is-url';

function handleSubmit(element) {
    element.preventDefault();

    const input = document.getElementById('textToSend').value;
    isUrl(input.toString()) ? Client.sendQuery(input) : window.alert('Please submit a valid URL');
}

export { 
    handleSubmit
}

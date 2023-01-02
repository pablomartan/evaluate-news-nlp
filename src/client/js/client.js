/* Function to handle form on submit */
import isUrl from 'is-url';

function handleSubmit(event) {
    event.preventDefault();

    const userInput = document.getElementById('textToSend').value;
    console.log(userInput);
    isUrl(userInput.toString()) ? sendQuery(userInput) : alert("The input is not valid! Please, post a correct URL");
}

async function sendQuery(input) {
    console.log(input);
    try {
    await fetch('http://localhost:8081/query', {
        method: 'POST',
        credentials: 'omit',
        headers: {
            'Content-Type': 'text-html'
        },
        body: input
    })
        console.log('Succesfully posted!');
    }
    catch(error) {
        console.log(error);
    }
}

export { handleSubmit }

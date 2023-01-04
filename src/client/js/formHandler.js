/* Function to handle form on submit */
import isUrl from 'is-url';

function handleSubmit(event) {
    event.preventDefault();

    const userInput = document.getElementById('textToSend').value;
    isUrl(userInput.toString()) ? Client.sendQuery(userInput) : alert("The input is not valid! Please, post a correct URL");
}



export { handleSubmit }

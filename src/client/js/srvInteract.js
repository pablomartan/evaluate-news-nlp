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
        .then(async (response) => {
            const parsedResponse = await response.json();
            return parsedResponse;
        })
        .then((apiResponse) => {
            Client.updateUi(apiResponse);
        })
    }
    catch(error) {
        console.log(error);
    }
}

export {
    sendQuery
}

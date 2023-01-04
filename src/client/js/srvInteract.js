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
        .then(Client.updateUi());
    }
    catch(error) {
        console.log(error);
    }
}

async function getInfo() {
    const srvData = await fetch('http://localhost:8081/getInfo');
    try {
        const data = await srvData.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(`Error while fetching data from server! See error: ${error}`)
    }
}

export {
    sendQuery,
    getInfo
}

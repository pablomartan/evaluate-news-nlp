const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const apiKey = process.env.API_KEY;
const queryBase = 'https://api.meaningcloud.com/sentiment-2.1';

//const port = 8081;
const port = 8080;

app.use(express.static('dist'));
app.use(bodyParser());
app.use(cors());

const queryUrl = async (req, res) => {
    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append('lang', 'auto');
    formData.append('url', req.body.url);

    console.log('Querying API with url: ', req.body.url);
    const response = await fetch(queryBase, {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    });
    const data = await response.json();
    res.send(JSON.stringify(data));
};

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
});

app.post('/query', queryUrl);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

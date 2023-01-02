const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const apiKey = process.env.API_KEY;
const queryBase = 'https://api.meaningcloud.com/sentiment-2.1';
let data = {};

const portDev = 8081;
const portProd = 8080;

app.use(express.static('dist'));
app.use(cors());

const queryUrl = async (req, res) => {
    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append('lang', "auto");
    formData.append('url', "https://theconversation.com/me-estoy-muriendo-y-te-lo-cuento-por-tiktok-lo-que-nos-ensenan-los-casos-de-charlie-y-olatz-vazquez-189323");

    const response = await fetch(queryBase, {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    });
    try {
    // TODO: Update UI with the data gotten from the API
        data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
};

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
});

app.post('/query', queryUrl);

app.listen(portDev, () => {
    console.log(`Server running on port ${portDev}`);
});

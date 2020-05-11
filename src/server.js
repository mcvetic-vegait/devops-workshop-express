const express = require('express');
const mongoose = require('mongoose');

const PORT = 9000;
const HOST = '0.0.0.0';
const MONGO_URL = 'mongodb://mongo/devops-workshop-express';// Url to the mongo container and test-express database.

mongoose.connect(MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        const app = express();

        app.get('/', (request, response) => response.send(('DevOps').split('').reverse().join('')));

        app.listen(PORT, HOST);

        console.log(`Running on http://${HOST}:${PORT}`);
    })
    .catch(console.error);

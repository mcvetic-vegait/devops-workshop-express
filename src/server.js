const express = require('express');

const PORT = 8787;
const HOST = '0.0.0.0';
const MONGO_URL = 'mongodb://mongo/devops-workshop-express';// Url to the mongo container and test-express database.

const app = express();
mongoose.connect(MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        app.get('/', (request, response) => response.send('Hello World!'));

        app.listen(PORT, HOST);

        console.log(`Running on http://${HOST}:${PORT}`);
    })
    .catch(console.error);

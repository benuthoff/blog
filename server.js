/*

    blog...

*/

const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port = 4222;

app.use(express.static('source'));

app.listen(port, () => {
    console.log(`Listening on :${port}`)
});
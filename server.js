/*

    blog...

*/

const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port = 4222;


/* Database Management */
const sqlite3 = require('sqlite3');
const db_file = '';

const testdb = new sqlite3.Database(db_file, callback=()=>{
    console.log(`Opened database /${db_file}`);
});

/* Server Endpoints */

app.get('/', (req, res)=>{ // Home.
    res.sendFile('/workspaces/blog/source/index.html');
});

app.use('/static', express.static('static')); // Static Files. (js/css)

app.listen(port, () => {
    console.log(`Listening on :${port}`);
});
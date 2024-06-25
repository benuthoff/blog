/*

    blog...

*/

const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port = 4222;


/* Database Management */
const sqlite3 = require('sqlite3');
const db_file = 'blog.db';

const testdb = new sqlite3.Database(db_file, callback=()=>{

    console.log(`Opened database /${db_file}`);
    
    testdb.serialize(()=>{
        // Create Articles Database
        testdb.run('CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY, access TEXT, title TEXT, author TEXT, publish DATE, edit DATE, hashed_password TEXT);')

        // Create Users Database
        testdb.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, name TEXT, bio TEXT, hashed_password TEXT);')

    });
    
});

/* Server Endpoints */

app.get('/', (req, res)=>{ // Home.
    res.sendFile('/workspaces/blog/source/index.html');
});

app.use('/static', express.static('static')); // Static Files. (js/css)

app.listen(port, () => {
    console.log(`Listening on :${port}`);
});
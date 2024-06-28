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
        testdb.run('CREATE TABLE IF NOT EXISTS articles (access TEXT PRIMARY KEY, title TEXT, author TEXT, publish DATE, edit DATE, hashed_password TEXT);')

        // Create Users Database
        testdb.run('CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, name TEXT, bio TEXT, profile_image TEXT);')

        // Create Log-in Credentials Database
        testdb.run('CREATE TABLE IF NOT EXISTS logins (username TEXT PRIMARY KEY, hashed_password TEXT);')

    });
    
});

/* Server Endpoints */

app.get('/', (req, res)=>{ // Home.
    res.sendFile('/workspaces/blog/source/index.html');
});
app.get('/sign-in', (req, res)=>{ // Home.
    res.sendFile('/workspaces/blog/source/sign-in.html');
});

app.use('/static', express.static('static')); // Static Files. (js/css)

app.listen(port, () => {
    console.log(`Listening on :${port}`);
});
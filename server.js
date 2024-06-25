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
        testdb.run('CREATE TABLE IF NOT EXISTS articles (id TEXT PRIMARY KEY, title TEXT, author TEXT, publish DATE, edit DATE);')
        testdb.run('INSERT INTO articles (id, title, author) VALUES ("000000000000", "This is a template article", "benuthoff");')
        // Article IDs are strings of 12 numeric and (lowercase) alphabetic characters. (?)
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
const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session');
const fs = require('fs');
const app = express();
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const authctr = require('./controllers/auth');
const bookctr = require('./controllers/books');
// const bookpath = '/Users/davidwells/Documents/david/devmtn/week6/my-shelfie/server/book_library';

massive(CONNECTION_STRING).then((db) =>
{
    app.set('db', db);
    console.log('database connection established');
})
app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
/////////// AUTH /////////////
app.post('/api/register', authctr.register);
app.post('/api/login', authctr.login);
app.post('/api/logout', authctr.logout);
app.get('/api/session', authctr.getCurrentSession);
//////////// BOOKS ////////////

app.get('/api/book/content/:id',bookctr.getBookContent);
app.get('/api/book', bookctr.getBookById)
app.patch('/api/bookmark', bookctr.updateBookmark);



app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT));
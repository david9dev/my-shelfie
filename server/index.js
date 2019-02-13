const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session');
const app = express();
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const authctr = require('./controllers/auth');

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

app.post('/api/register', authctr.register);
app.post('/api/login', authctr.login);
app.post('/api/logout', authctr.logout);

app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT));
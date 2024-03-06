require('dotenv').config();
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const path = require('path');
const express = require('express');
const session = require('express-session')
const publicRoutes = require('./routes/public.routes')
const petRoutes = require('./routes/pet.routes')

// Initialize Express 
const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Parse json response
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    key: process.env.key,
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000 * 60 * 8
    }
}));

// Connect Flash 
app.use(flash());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(publicRoutes.routes);
app.use(petRoutes.routes);

app.listen(4000);
console.log('Listening on Port=>', 4000)
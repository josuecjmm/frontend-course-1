require('dotenv').config();

const path = require('path');
const express = require('express');
const publicRoutes = require('./routes/public.routes')

// Initialize Express 
const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(publicRoutes.routes);

app.listen(4000);
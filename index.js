// Stock Market Portfolio App

const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;


// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

const otherstuff = "hello there, this is other stuff!";


// Set Handlebar Routes
app.get('/', (req, res) => {
    res.render('home', {
       stuff: otherstuff 
    });
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on Port ' + PORT));
//require Express
const express = require('express');

//set express to a variable
const app = express();

//Define a "root" route directly on app
app.get('/', function (req, res) {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
});

//Set a variable of port 3000
app.listen(3000, function() {
    console.log("Listening on port 3000.");
});


app.get('/', (req, res) => {
    res.render('template', { title: 'Home', message: 'Welcome!', content: 'Welcome to the Pokemon App!' })
  })
  
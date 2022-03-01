//require Express
const express = require('express');
const res = require('express/lib/response');

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

//Set this 'database' to a variable called pokemon in your server.js file
const pokemons = require('./models/pokemon.js');

//Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get('./models/pokemon.js', (req, res) => {
    res.send('template', { title: 'Home', message: 'Welcome!', content: 'Welcome to the Pokemon App!' })
  });

app.get('/pokemons', (req, res) => {
    res.send(pokemons)
});


//MVC SET_UP
//views    
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//models

//MIDDLEWEAR
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     console.log(req.body)
//     next()
// });
// app.use(methodOverride('_method'));


//INDEX
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemons })
});

//To make the first letter uppercase I know I need something like this, 
//but I'm not sure how eactly to just make the first letter uppercase
//let uppercasetext = text.toUpperCase(); 

//add a new get route /pokemon/:id
app.route('/pokemon/:id')
    .get((req,res) => {
        res.send('whatever')
    });


//NEW

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW
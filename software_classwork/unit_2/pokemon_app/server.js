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

//Set this 'database' to a variable called pokemon in your server.js file
const pokemon = require('./models/pokemon.js');
//Is this correct?????

//Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get('/pokemon.js', (req, res) => {
    res.send('template', { title: 'Home', message: 'Welcome!', content: 'Welcome to the Pokemon App!' })
  });
  //EEEk! I don't think this is correct. 


//MVC SET_UP
//views    
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//models
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });

//MIDDLEWEAR
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     console.log(req.body)
//     next()
// });
// app.use(methodOverride('_method'));





//INDEX

//Index
// app.get('/pokemon', function(req, res) {
//     Pokemon.find({}, (err, "") => {
//         if (err) {
//             res.status(400).send(err)
//         } else {
//             res.render('pokemon/Index', {
//                 keyvalue: pair
//             })
//         }
//     })
// });
// //Sooo, I don't know exactly what I'm doing here. But I think I started it correctly???


//NEW

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW
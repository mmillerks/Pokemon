//Dependencies
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const path = require("path"); // built in node module we use to resolve paths more on this when we use it

//Create Express App
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')



//Routes
app.get('/',(req,res)=>{
    res.send(`<h1>99 bottles of beer on the wall</h1> 
    <a href="98">take one down and pass it around</a>`)
})

app.get('/:number_of_bottles',(req,res)=>{
if (req.params.number_of_bottles==="0") {
    res.send(`<a href="/">go back to main page</a>`) 
}
    res.send(`<a href="${req.params.number_of_bottles - 1}">take one down and pass it around</a>
    ${req.params.number_of_bottles} number of beers on the wall`)
})


//Server Listener
const PORT = 3000;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

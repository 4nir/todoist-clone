const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//initialize express into a variable called app
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config

const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
.connect(db)
.then((() => console.log("MongoDB Connected!")))
.catch(err => console.log("err")); 

//we need to run our server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ${port}'));

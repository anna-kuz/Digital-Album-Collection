// Require Modules
//get our app up and running

require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');


const db = require('./models')



/* Configure the app (app.set)
--------------------------------------------------------------- */
//set view engine, using ejs as view engine
app.set('view engine', 'ejs');
//set where views are coming from, views directory "views"- where all the diff views of my files are gonna go
app.set('views', path.join(__dirname, 'views'));


const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(connectLiveReload());
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));



/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
//going to pull from an environment variable for when we deploy
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
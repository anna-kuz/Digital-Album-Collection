// Require Modules
//get our app up and running

require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');


const db = require('./models')


// require routes in controllers folder

const albumsCtrl = require('./controllers/albums')
const albumCommentCtrl = require('./controllers/comments')

const app = express();


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



app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(connectLiveReload());
app.use(methodOverride('_method'));




///// MOUNT ROUTES
app.get('/', function (req, res) {
    db.Album.find({ isFavorited: true })
        .then(albums => {
            res.render('home', {
                albums: albums
            })
        })
});


//seed collection
app.get('/seed', function (req, res) {
    db.Album.deleteMany({})
    .then(removedAlbums => {
        console.log(`Removed ${removedAlbums.deletedCount} albums`)
        db.Album.insertMany(db.seedAlbums)
        .then(addedAlbums => {
            console.log(`Added ${addedAlbums.length} albums`)


            /////

            res.json(addedAlbums)

            /////
        })
    })
})


//
app.get('/about', function (req, res) {
    res.render('about')
});

///
app.use('/albums', albumsCtrl)
app.use('/comments', albumCommentCtrl)


///
app.get('*', function (req, res) {
    res.render('404')
});


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
//going to pull from an environment variable for when we deploy
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
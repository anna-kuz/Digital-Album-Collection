
/* require modules!
--------------------------------------------------------------- */
const express = require('express')
const db = require('../models')
// router allows us to handle routing outisde of server.js
const router = express.Router()



// Routes

// INDEX ROUTE
router.get('/', function (req, res) {
    // console.log(db)
    db.Album.find({})
        .then(albums => {
            // console.log(albums)
                const eighties = albums.filter(album => album.year >= 1980 && album.year < 1990)
                const nineties = albums.filter(album => album.year >= 1990 && album.year < 2000)
                const twoThousands = albums.filter(album => album.year >= 2000 && album.year < 2010)
                // console.log(eighties)       
            res.render('index', {
                eighties: eighties,
                nineties: nineties,
                twoThousands: twoThousands
            })
        })
})


// NEW ALBUM ROUTE
router.get('/new', (req, res) => {
    res.render('new')
})

//
router.get('/:id', function (req, res) {
    db.Album.findById(req.params.id)
        .then(album => {
            if (album) {
                res.render('album', { album: album })
            } else {
                res.send('404 Error: Page Not Found')
            }
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})


// new albums show page
router.post('/', (req, res) => {
    const songList = req.body.songList.split(",").map(song => song.trim())
    const numberedSongList = songList.map((song, index) => `${index + 1}. ${song}`).join("\n")
    req.body.songList = numberedSongList
    db.Album.create(req.body)
        .then(album => res.redirect('/albums/' + album._id))
})



// edit album
router.get('/:id/edit', (req, res) => {
    db.Album.findById(req.params.id)
        .then(album => res.render('edit', { album: album }))
})

// update
router.put('/:id', (req, res) => {
    db.Album.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(album => res.redirect('/albums/' + album._id))
})

// delete album
router.delete('/:id', (req, res) => {
    db.Album.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/albums'))
})

module.exports = router
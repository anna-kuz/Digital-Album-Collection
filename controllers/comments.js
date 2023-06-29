// require modules

const express = require('express')
const router = express.Router()

//require db connection and models
const db = require('../models')



//ROUTES

//index route
router.get('/', (req, res) => {
    db.Album.find({}, { comments: true, _id: false })
        .then(albums => {
            // format query results to appear in one array, 
            // rather than an array of objects containing arrays 
            const flatList = []
            for (let album of albums) { flatList.push(...album.comments) }
            res.render('comments/cmt-index', { apps: flatList })
        })
});


//new album route
router.get('/new/:albumId', (req, res) => {
    db.Album.findById(req.params.petId)
        .then(album => {
            if (album) {
                res.render('comments/new-cmt.ejs', { album: album })
            } else {
                res.send('404 Error: Page Not Found')
            }
        })
})


// destroy route
router.delete('/:id', (req, res) => {
    db.Album.findOneAndUpdate(
        { 'applications._id': req.params.id },
        { $pull: { comments: { _id: req.params.id }}},
        { new: true }
    )
})


module.exports = router
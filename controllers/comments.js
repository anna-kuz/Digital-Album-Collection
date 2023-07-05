// require modules

const express = require('express')
const router = express.Router()

//require db connection and models
const db = require('../models')



//ROUTES

// Index
router.get('/', (req, res) => {
	db.Album.find({}, { comments: true, _id: false })
        .then(albums => {
	    	const flatList = []
	    	for (let album of albums) {
	        	flatList.push(...album.comments)
	    	} res.render('comments/cmt-index', { cmts: flatList})
		}
        
	)
});

// New Route
router.get('/new/:albumId', (req, res) => {
    db.Album.findById(req.params.albumId)
        .then(album => {
            if (album) {
                res.render('comments/new-cmt.ejs', { album: album })
            } else {
                res.render('404')
            }
        })
})

// Create Route
router.post('/create/:albumId', (req, res) => {
    db.Album.findByIdAndUpdate(
        req.params.albumId,
        { $push: { comments: req.body } },
        { new: true }
    )
        .then(() => res.redirect('/albums/' + req.params.albumId))
});

// Show Route
router.get('/:id', (req, res) => {
    db.Album.findOne(
        { 'comments._id': req.params.id },
        { 'comments.$': true, _id: false }
    )
        .then(album => {
            res.render('comments/cmt-album', { cmt: album.comments[0] })
        })
});

// Destroy Route
router.delete('/:id', (req, res) => {
    db.Album.findOneAndUpdate(
        { 'comments._id': req.params.id },
        { $pull: { comments: { _id: req.params.id } } },
        { new: true }
    )
    .then(album => res.redirect('/albums/' + album._id))
});


// Export routes
module.exports = router
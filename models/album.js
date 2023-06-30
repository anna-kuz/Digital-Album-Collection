// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the album collection
const albumSchema = new mongoose.Schema({
    albumCover: { type: String, required: true },
    albumName: { type: String, required: true },
    bandName: { type: String, required: true },
    year: { type: Number, min: 0, required: true },
    description: { type: String, required: false },
    genre: { type: String, required: true },
    isFavorited: { type: String, enum: ['Yes', 'No'], required: true },
    spotifyLink: { type: String, required: false },
    songList: { type: [String], required: false }
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Album', albumSchema);
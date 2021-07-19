const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: [2, '*name must be at least two characters long']
    },
    preferredPosition:{
        type: String,
        required: false
    }
},
{timestamps: true})

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
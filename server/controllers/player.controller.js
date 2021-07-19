const Player = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.findAllPlayers = (req, res) => {
    Player.find({})
        .then(allPlayers=>res.json(allPlayers))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.updateOnePlayer = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true
    })
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.deleteOnePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}
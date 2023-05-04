const { Thought, Reaction } = require('../models/');
//may need to import/require User to link thought to User

module.exports = {
    getThought(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },

    // getSingleThought

    // createThought

    // updateThought

    // deleteThought

    // createReaction

    // deleteReaction
}
const { Thought, Reaction } = require('../models/');
//may need to import/require User to link thought to User

module.exports = {
    getThought(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },

    // getSingleThought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought was found with that Id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // createThought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) =>{
            return User.findOneAndUpdate(
                {username: req.body.username},
                {$addToSet: {thoughts: thought._id}},
                {new:true}
            )
        })
        .then((thoughts) => res.status(200).json(thoughts))
        .catch((err) => res.status(500).json(err));
    }
    // updateThought

    // deleteThought

    // createReaction

    // deleteReaction
}
const { Thought, User, reactionSchema } = require('../models');

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
            console.log('Unable to get single thought')
    },

    // createThought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { username: req.body.username },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                )
            })
            .then((thoughts) => res.status(200).json(thoughts))
            .catch((err) => res.status(500).json(err));
            console.log('Unable to create thought')
    },
    // updateThought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought was found with that Id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
            console.log('Unable to update thought')
    },

    // deleteThought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought was found with that Id' })
                    : Thought.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then(() => res.json({ message: 'Your thought deleted!' }))
            .catch((err) => res.status(500).json(err));
            console.log('Unable to delete thought')
    },

    // createReaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought was found with that Id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
            console.log('Unable to create reaction')
    },

    // deleteReaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought was found with that Id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
            console.log('Unable to delete reaction')
    }
}
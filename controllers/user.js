const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
    getUser(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },

    // getSingleUser
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user was found with that Id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // createUser
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    // updateUser
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user was found with that Id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // deleteUser
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user was found with that Id' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and their thoughts were succesfully deleted' }))
            .catch((err) => res.status(500).json(err));
    },

    // createFriendship
    createFriendship(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user was found with that Id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
            console.log('unable to create friendship')
    },

    // deleteFriendship
    deleteFriendship(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user was found with that Id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
            console.log('Unable to delete friendship')
    }

}

const User = require('../models/User');

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
                !thought
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
        User.findOneAndUpdate (
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
            ) 
        .then ((user) =>
        !user
            ?res.status(404).json ({message: 'No user was found with that Id'})
            :res.json(user)
        )
        .catch ((err) => res.status(500).json(err));
    },
    // deleteUser

    // createFriendship
    createFriendship(req, res) {
        User.findOneAndUpdate (
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            {runValidators: true, new: true}
            ) 
        .then ((user) =>
        !user
            ?res.status(404).json ({message: 'No user was found with that Id'})
            :res.json(user)
        )
        .catch ((err) => res.status(500).json(err));
    },

    // deleteFriendship
    deleteFriendship(req, res) {
        User.findOneAndUpdate (
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {runValidators: true, new: true}
            ) 
        .then ((user) =>
        !user
            ?res.status(404).json ({message: 'No user was found with that Id'})
            :res.json(user)
        )
        .catch ((err) => res.status(500).json(err));
    }

}

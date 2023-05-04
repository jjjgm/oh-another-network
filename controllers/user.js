const User = require('../models/User');

module.exports = {
    getUser(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },

    // getSingleUser

    // createUser

    // updateUser

    // deleteUser

    // createFriendship

    // deleteFriendship

}
const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    createFriendship,
    deleteFriendship,
} = require('../../controllers/user');

// GET ALL USERS
// GET SINGLE USER (_id)
// POST NEW USER
// PUT NEW USER (_id)
// DELETE USER (_id)
// POST NEW FRIEND 
// DELETE FRIEND FROM USER LIST
// BONUS: REMEMBER TO REMOVE ASSOCIATED THOUGHTS FROM USER

// ROUTES THESE (get & post) TO /api/users
router.route('/').get(getUser).post(createUser);

// ROUTES THESE (gets a user by id, put, and delete) TO /api/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// ROUTES THESE (gets a user by id, put, and delete) TO /api/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(createFriendship).delete(deleteFriendship);

module.exports = router;
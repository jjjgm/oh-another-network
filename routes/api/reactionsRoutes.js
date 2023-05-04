const router = require('express').Router();

const {
    createReaction,
    deleteReaction
} = require ('../../controllers/thought')

// POST (w/ SINLGE THOUGHTS ARRAY FIELD)
// DELETE REACTIONS (w/ reactionId)
router.route('/:thoughtId').post(createReaction).delete(deleteReaction);

//WILL POST THOUGHTS TO REACTIONS ARRAY - remember it's relational to a thought object
router.route('/:thoughtId/reactions').post(createReaction);

// ROUTE TO DELETE REACTIONS (w/ reactionId)- remember it's relational to a thought object
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
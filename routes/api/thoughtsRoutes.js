const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    //REACTION SPECIFIC
    createReaction,
    deleteReaction
} = require ('../../controllers/thought');


// ROUTES THESE (get & post) TO /api/thoughts
router.route('/').get(getThought).post(createThought);

// ROUTES THESE (get by id, put, and delete) TO /api/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// GET ALL THOUGHTS
// GET SINGLE THOUGHT BY ID
// POST NEW THOUGHT (w/ _id)
// PUT NEW THOUGHT (w/ _id)
// DELETE THOUGHT (w/ _id)
// adding reactions here as they are directly relational to thought objects
// POST  REACTION (w/ SINGLE THOUGHTS ARRAY FIELD)
// DELETE REACTION  

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;
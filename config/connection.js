const { connection, connect } = require('mongoose');

connect('mongodb://localhost/thoughtsAndReactions', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
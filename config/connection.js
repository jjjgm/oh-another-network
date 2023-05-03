const { connection, connect } = require('mongoose');

connect = ('mongodb://localhost/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
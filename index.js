const express = require('express');
const db = require('./config/connection')
const routes = require('./routes');

const cwd = process.cwd()

// LOCAL PORT & USE EXPRESS
const PORT = 3001
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// DB FILE TO CONNECT PORT TO MONGODB
db.once('open', () => {
app.listen(PORT, () => {
    console.log(`Your API server for is running on port ${PORT}`);
});
});
const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');
const { getUserInfo, getThoughtInfo, getReaction, getUserEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connection established');

    await User.deleteMany({});
    await Thought.deleteMany({});
    // await Thought.Response.deleteMany({});

    const users = [];
    const thoughts = getThoughtInfo(5);
    console.log(getUserInfo())

    for (let i = 0; i < getUserInfo().length; i++) {
        const username = getUserInfo()[i].username;
        const email = getUserEmail()[i].email;
        users.push({ username, email });
    }

    
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
    console.table(users);
    console.table(thoughts);
    console.info('Seeding was successful');
    process.exit(0);
});


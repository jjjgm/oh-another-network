const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');
const { getUserInfo , getThoughtInfo, getReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connection established');

    await User.deleteMany({});
    await Thought.deleteMany({});
    // await Thought.Response.deleteMany({});

    const users = [];
    const thoughts = getThoughtInfo;
    
    for (let i = 0; i < 15; i++) {
        const friendName = getUserInfo();
        const username = friendName.split(' ')[0];
        const email = '/^\S+@\S+\.\S+$/';
    // for (let i = 0; i < users.length; i++) {
    //     const friendName = getUserInfo;

    users.push({ username, email });

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding was successful');
    process.exit(0);
}
});

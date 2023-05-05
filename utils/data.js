const username = [
    'admin',
    'moderator',
]

const thoughtBodies =[
    'Hello, world',
    'Welcome, world',
]

const exampleReactions = [
    'Like',
    'Dislike',
    'Thanks for sharing your thought',
    'Please explain further',
]

const users = [];

const getArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getUserInfo = () =>
    `${getArrItem(username)}`;

const getThoughtInfo = (int) => {
    let result = [];
    for (let i = 0; i < int; i++) {
        result.push({
            thoughtText: getArrItem(thoughtBodies),
            createdAt: Math.random() < 0.5,
            username: getUserInfo(),
            reactions: [...getReaction(5)],
        });
    }
    return result;
};

// Create the responses that will be added to each video
const getReaction = (int) => {
    if (int === 1) {
        return getArrItem(exampleReactions);
    }
    let result = [];
    for (let i = 0; i < int; i++) {
        result.push({
            reactionBody: getRandomArrItem(exampleReactions),
            username: getUserInfo(),
        });
    }
    return result;
};

// Export the functions for use in seed.js
module.exports = { getReaction, getThoughtInfo, getUserInfo, };

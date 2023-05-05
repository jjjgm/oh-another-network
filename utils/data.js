const username = [
    'admin',
    'moderator',
]

const email = [
    'example@example.com',
    'moderator@example.com'
]

const exampleThoughts =[
    'Hello, world',
    'Welcome, world',
]

const exampleReactions = [
    'Like',
    'Thanks for sharing your thought',
]



const users = [];

const getArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getUserInfo = () =>
    `${getArrItem(username)}`;

const getThoughtInfo = (int) => {
    let result = [];
    for (let i = 0; i < int; i++) {
        result.push({
            thoughtText: getArrItem(exampleThoughts),
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
            reactionBody: getArrItem(exampleReactions),
            username: getUserInfo(),
        });
    }
    return result;
};

// Export the functions for use in seed.js
module.exports = { getReaction, getThoughtInfo, getUserInfo, };

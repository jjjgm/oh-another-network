const exampleUser =[
{ username: 'admin', email: 'admin@example.com', thoughts: [], friends: [] },
{ username: 'moderator', email: 'moderator@example.com'},
{ username: 'fancyUsername56', email: '56email@email.go'}, ];

// const username = [
//     'admin',
//     'moderator',
// ]

// const email = [
//     'example@example.com',
//     'moderator@example.com'
// ]

const exampleThoughts =[
    'Hello, world',
    'Welcome to our social media web app',
]

const exampleReactions = [
    'Like',
    'Thanks for sharing your thought',
    'Unsure',
]



const users = [];

const getArrayItem = (arr) => arr;


function getUserInfo() {
    return getArrayItem(exampleUser);
}

function getUserEmail() {
    return getArrayItem(exampleUser);
}

const getThoughtInfo = (int) => {
    let result = [];
    for (let i = 0; i < int; i++) {
        result.push({
            thoughtText: getArrayItem(exampleThoughts),
            // createdAt: Math.random() < 0.5,
            username: getUserInfo(),
            reactions: [...getReaction(5)],
        });
    }
    return result;
};

// Reactions that will be returned w/ each thought
const getReaction = (int) => {
    if (int === 1) {
        return getArrayItem(exampleReactions);
    }
    let result = [];
    for (let i = 0; i < int; i++) {
        result.push({
            reactionBody: getArrayItem(exampleReactions),
            username: getUserInfo(),
        });
    }
    return result;
};

// Export the functions for use in seed.js
module.exports = { getReaction, getThoughtInfo, getUserInfo, getUserEmail};

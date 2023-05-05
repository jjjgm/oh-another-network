const { Schema, model } = require('mongoose');
// // REFERENCE & REQUIRE THOUGHT SCHEMA. pos.
// const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /^\S+@\S+\.\S+$/,
            validate: () => Promise.reject(new Error('Invalid Email input. Please enter a valid email address.'))
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                // FOR NOW, OBJECT ID WILL BE ADDED TO FRIENDS VIRTUAL
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virutals: true,
        },
        id: false,
    }
);


// CREATING VIRTUAL FOR FRIENDS
userSchema
    .virtual('friendCount')
    .get(function () {
        return `${this.username}`;
    })
    .set(function (v) {
        //UNSURE IF SHOULD SPLIT BUT WILL KEEP FOR NOW IF EMPTY SPACES
        const friendName = v.split(' ')[0];
        this.set({ friendName });
    });

//NAMES MODEL: 'User' IN userSchema (FOR EXTERNAL REFERENCE)
const User = model('User', userSchema);


// // USER EMAIL VALIDATE
// //MAY NEED TO PLACE THIS ELSEWHERE, POSS. CONTROLLERS
// const user = new User();
// user.username = 'username';
// user.email = 'test@example.com';
// let error;
// try {
//     user.validate();
// } catch (err) {
//     error = err;
// }


// EXPORT USER
module.exports = User;
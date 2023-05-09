const { Schema, model } = require('mongoose');
// // REFERENCE & REQUIRE THOUGHT SCHEMA. pos.
const thoughtSchema = require('./Thought');

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
            match: [/^\S+@\S+\.\S+$/],
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
        return `${this.friends.length}`;
    })


//NAMES MODEL: 'User' IN userSchema (FOR EXTERNAL REFERENCE)
const User = model('User', userSchema);





// EXPORT USER
module.exports = User;
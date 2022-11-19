const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {type: String, required:true, unique:true, trim:true},
        email:{type: String, required:true, unique:true, $match:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/},
        thoughts:[{type: Schema.Types.ObjectId, ref:'thought'}],
        friends:[{type: Schema.Types.ObjectId, red: 'user'}]
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
);

userSchema.virtual('friendCount').get(function () {
    return `Number of friends: ${this.friends.length}`;
});

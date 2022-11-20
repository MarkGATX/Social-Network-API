const { Schema, model } = require('mongoose');
const reaction = require('./Reaction')

// //schema for Reaction subdocument
// const reactionSchema = new Schema(
//     {
//         reactionId: { 
//             type: Schema.Types.ObjectId, 
//             default: () => new Types.ObjectId() 
//         },
//         reactionBody: { 
//             type: String, 
//             required: true, 
//             max: [280, `Your reaction can only be 280 characters. Try deleting a that or some umms.`] 
//         },
//         username: { 
//             type: String, 
//             required: true },
//         createdAt: { 
//             type: Date, default: 
//             Date.now }
//     },
//     {
//         toJSON: {
//             virtuals: true,
//         }
//     });


// Schema for Thoughts
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, min: 1, max: [280, `Your thought can't be more than 280 characters long.`] },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reaction]
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return `Number of reactions: ${this.reactions.length}`
});

thoughtSchema.virtual('dateFormat')
    .get(function () {
        return `Created on: ${this.createdAt.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}`
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

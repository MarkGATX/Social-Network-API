const { Schema, Types } = require('mongoose');

//schema for Reaction subdocument
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max: [280, `Your reaction can only be 280 characters. Try deleting a that or some umms.`]
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date, default:
                Date.now
        }
    },
    {
        toJSON: {
            virtuals: true,
        }
    });

module.exports = reactionSchema;
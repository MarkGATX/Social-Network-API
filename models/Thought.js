const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText:{type:String, required:true, min:1, max:[280, `Your thought can't be more than 280 characters long.`]},
    createdAt: {type: Date, default: Date.now},
    username: {type:String, required:true},
    reactions: [{reactionSchema}]
},
{
    toJSON: {
      virtuals: true,
    },
}
);

thoughtSchema.virtual('reactionCount').get(function() {
    return `Number of reactions: ${this.reactions.length}`
});

thoughtSchema.virtual('dateFormat')
    .get(function(){
        this.createdAt.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

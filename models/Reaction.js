const { Schema } = require('mongoose');

const reactionSchema = newSchema ({
    reactionID: {type:Schema.Types.ObjectId, default:new Schema.Types.ObjectId},
    reactionBody: {type: String, required:true, max:[280, `Your reaction can only be 280 characters. Try deleting a that or some umms.`]},
    username:{type:String, required:true},
    createdAt:{type:Date, default: Date.now}
},
{
    toJSON:{
        virtuals:true,
    }
});

reactionSchema.virtual('dateFormat')
    .get(function(){
        this.createdAt.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    });
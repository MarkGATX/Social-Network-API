const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText:{type:String, required:true, min:1, max:[280, `Your thought can't be more than 2808 characters long.`]},
    createdAt: {}
})
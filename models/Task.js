const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let  TaskSchema = new Schema({
    info:{
        type: String,
        required: true
    },
    level:{
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('task',TaskSchema)

const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let  UserSchema = new Schema({
    login:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,  ref: 'task'
    }]
});
module.exports = mongoose.model('user',UserSchema);

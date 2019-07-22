const User = require('../models/user');
const Task = require('../models/task');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/manager');

module.exports = {
    createdUser: async function (l, p) {
        let user = new User({
            login: l,
            password: p

        });
        await user.save();

    },
    UserExe: async function (l) {
        let data = await User.find({login: l});
        if (data.length === 0) {
            return true;
        } else {
            return false;
        }


    },
    PassUser: async function (l, p) {

        ;let data = await User.find({login: l, password: p});

        if (data.length === 0) {
            return false;
        } else {
            return true;
        }

    },
    GetUser: async function (l, p) {

        let data = await User.findOne({login: l});

        return data;


    },


    createTask: async function (i, l, user) {
        let task = new Task({
            info: i,
            level: l
        });
        await task.save();


        let data = await User.findOne({login: user});

        await data.tasks.push(task._id);
        await  data.save();




    },
    gettasks: async function ( user) {
        let data = await User.findOne({login: user});
let tasks = [];
        for (var i = 0; i < data.tasks.length; i++) {
            let task = await Task.findById(data.tasks[i]);
            tasks.push(task);

        }
      return tasks;



    },
    delTask: async function (id,user) {



    let data = await  User.find();
        for (var i = 0; i< data.length; i++) {
            var index = await data[i].tasks.indexOf(id);
            if (index > -1) {
             await   data[i].tasks.splice(index, 1);
                await  data[i].save();
            }
        }
    await Task.findOneAndDelete(id);



    },
    share: async function (user,task) {
console.log(user,task);
let data =  await User.findOne({login: user});
        await data.tasks.push(task);
        await  data.save();



    },
    edit: async function (id,info,level) {
//let  data = await  Task.findById(id);
 await Task.findByIdAndUpdate(id, {info: info, level: level});



    },

};

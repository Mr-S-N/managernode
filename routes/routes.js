const express = require('express');

const router = express.Router();

const  work = require('../dbwork/work');





module.exports = router;

router.post('/login', async (req, res) => {
    let data = req.body;

    let result  = await   work.PassUser(data.data.login,data.data.password);

    res.send(JSON.stringify(result));


    });
router.post('/deletetask', async (req, res) => {
    let data = req.body.data;

    await work.delTask(data.id,data.login);
});

router.post('/share', async (req, res) => {
    let data = req.body.data;

  await  work.share(data.login,data.id)
});

router.post('/edit', async (req, res) => {
    let data = req.body.data;
await  work.edit(data.id,data.info,data.level);

});

router.post('/getuser', async (req, res) => {
    let data = req.body;

   let user = await  work.GetUser(data.data.login);

    res.send(JSON.stringify(user));



});
router.post('/addtask', async (req, res) => {
    let data = req.body.data;


   work.createTask(data.info,data.level,data.login);




});
router.post('/gettasks', async (req, res) => {
    let data = req.body.data;



  let task =  await work.gettasks(data);

    res.send(JSON.stringify(task));



});
router.post('/registration', async (req, res) => {
    let data = req.body;

    let result  = await   work.UserExe(data.data.login);
    if (result===true){
           await work.createdUser(data.data.login,data.data.password);

    }
    res.send(JSON.stringify(result));






});

// create router

const router = require('express').Router();

const userController = require('./users.controller')

router.post('/register', (req, res) => {

    var result = userController.register(req.body);
    res.send(result);
})

router.get("/userlist", async (req, res) => {

    var result = await userController.getAllusers();
    if (result == "Error") {
        res.statusCode = 500;
        res.send("Something Went Wrong");
    }
    else {
        res.statusCode = 200;
        res.send(result);
    }

})

module.exports = router
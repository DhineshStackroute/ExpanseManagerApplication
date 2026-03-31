// create router

const router = require('express').Router();

// iport the controllers
const userController = require('./expanse.controller');

// add  aexpense
router.post('/addExpense', (req, res) => {
    userController.addExapnse(req.body);
    res.send("Expanse added Sucessfully");
})

// get all expanse
router.get("/expanselist", (req, res) => {
    var result = userController.getAllExpanse();

    res.send(result);
})


// get a reaponse by id

router.get("/expanselist/:id", (req, res) => {
    
    // res.send("view all your response list")
    
    console.log(req.params.id)
    var result= userController.getEapnsesbyId(req.params.id);
    res.send(result);

})

router.get('/search/:name', (req, res) => {
    console.log(req.params.name);
    res.send(req.params.name)
})

module.exports = router
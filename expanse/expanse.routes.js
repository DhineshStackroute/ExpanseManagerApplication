// create router

const { route } = require('../app');

const router= require('express').Router();

// add  aexpense
router.post('/addExpense',(req,res)=>{
    res.send("Expanse added Sucessfully");
})

// get all expanse
router.get("/expanselist", (req,res)=>{
    console.log("get");
    
    res.send("view all your response list")
})


// get a reaponse by id

router.get("/expanselist/:id", (req,res)=>{
    console.log(req.params.id)
    console.log("get");
    
    res.send("view all your response list")
})

router.get('/search/:name', (req,res)=>{
    console.log(req.params.name);
    res.send(req.params.name)
})

module.exports = router
// create router

const router= require('express').Router();

router.post('/register',(req,res)=>{
    res.send("users registerdd Sucessfully");
})

router.get("/userlist", (req,res)=>{
    console.log("get");
    
    res.send("Registered User Details")
})

module.exports = router
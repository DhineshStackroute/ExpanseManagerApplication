const express= require('express');
const bodyparser= require('body-parser')
const app= express();

// define default endpoint of the application

// import the ExpanseRouter

const expanseRouter= require('./expanse/expanse.routes');

const userRouter= require('./users/users.routes')

// add a body parser middler for application

app.use(bodyparser.json());
app.use(bodyparser.raw());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/expanse', expanseRouter);
app.use('/users',userRouter);

app.get('/welcome', (req, res)=>{
    // handle the request
    res.status=200;
    res.statusMessage="sucesffully access the default endpoint";
    res.send("Thanks for Visiting the EMA");
})

app.post("/hello",(req,res)=>{
    console.log(req.body.user);
    res.statusCode= 201;
    res.send(req.body);
})

module.exports= app
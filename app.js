const express= require('express');

const app= express();

// define default endpoint of the application

// import the ExpanseRouter

const expanseRouter= require('./expanse/expanse.routes');

const userRouter= require('./users/users.routes')


app.use('/expanse', expanseRouter);
app.use('/users',userRouter);

app.get('/welcome', (req, res)=>{

    // handle the request
    res.status=200;
    res.statusMessage="sucesffully access the default endpoint";
    res.send("Thanks for Visiting the EMA");

})

module.exports= app
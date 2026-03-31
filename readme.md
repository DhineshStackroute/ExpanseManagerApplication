step 1: Create a express application for Expense Manger 
-> initialise the project "npm init --y"
step 2: install the express server "npm i express"

step: create  aentry point( file) of application "app.js"
    create  a app for application using express
    ```
    const express= require('express');

const app= express();

// define default endpoint of the application

app.get('/welcome', (req, res)=>{

    // handle the request
    res.status=200;
    res.statusMessage="sucesffully access the default endpoint";
    res.send("Thanks for Visiting the EMA");

})

module.exports= app
    ```
step 4: Configure the server and then run it

defien it in bin/www.js


Expanse manger:
1. User Manager - user Modules
    -> controllers
    -> routes
    -> dbo
    -> entity
2. Expanse Manage - Expenase Mondule
// import the app
const app= require('../app')


const PORT=8080;
const server= app.listen(PORT);

server.on('listening',()=>{
    console.log("Server started");    
})
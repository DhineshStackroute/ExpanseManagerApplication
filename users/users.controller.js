const axios = require('axios');


const url = "http://localhost:5000/usres"

// register a new user
const register = (userdetails) => {

    if (userdetails == null || userdetails == undefined) {
        return "Something Went Wrong";
    }
    else {
        axios.post(url, userdetails);
        return "Added Successfully";
    }
}
// login a user
// admin can seee the all user details
// const  getAllusers=()=>{
//   return axios.get(url).then((data)=>{
//     console.log("res is "+data.data);    
//     return data.data})
//     .catch((err)=>{
//         console.log(err);

//     })

// }

// Create a method to get alluser details from the json file using axios

const  getAllusers = async() => {
    return await axios.get(url).then((data) => {
        return data.data;
    }).catch((err) => {
        console.log(err);
        return "Error";
    })
}

module.exports = {
    register,
    getAllusers
}

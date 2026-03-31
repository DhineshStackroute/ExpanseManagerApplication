
// controller to congtroll the routing req and res

const { get } = require("../app");

const exapnses = []

const addExapnse = (exapnsedetails) => {
    exapnses.push(exapnsedetails);
}

const getAllExpanse = () => {
    return exapnses;
}
const getEapnsesbyId = (id) => {
console.log(id);
console.log(exapnses);

    var res = exapnses.filter(num=>num.id==id);
    // console.log(res);
    
    // return "res";
    return res;
}

module.exports = {
    addExapnse,
    getAllExpanse,
    getEapnsesbyId
}
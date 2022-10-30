const {getUsers} = require("./DB");

function createAnewUser() {

}

function FindUserByID(id) {
    return getUsers().then(users => {
        return users.find((item) => item.id == id);
    });
}


module.exports = {
    createAnewUser, FindUserByID
}

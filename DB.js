const {read, write} = require("./Storage");


async function getUsers() {
    let users = await read("data.json")
    return JSON.parse(users);
}

async function SaveUsers(users) {
    await write("data.json", JSON.stringify(users))
}


async function CreateNewUser(user) {
    let users = await getUsers()

    let ids = users.map(u => u.id);
    user.id = (ids.length > 0) ? Math.max(...ids) + 1 : 1001;
    users.push(user)

    await SaveUsers(users)

    return user;
}

async function DeleteUser(id) {
    let users = await getUsers();

    let index = users.findIndex((user) => user.id == id);
    if (index === -1)
        throw new Error("user not found");

    users.splice(index, 1);
    await write("data.json", JSON.stringify(users));
}


module.exports = {
    getUsers, SaveUsers, CreateNewUser, DeleteUser
}

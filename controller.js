const {getUsers, CreateNewUser, DeleteUser} = require("./DB");
const {FindUserByID} = require("./service");

const getAllUsersController = async (req, res) => {
    res.json({users: await getUsers()});
}

const CreateNewUserController = async function (req, res) {
    let user = req.body;
    await CreateNewUser(user)
    res.json({musersessage: "user created successfully", user});
}

const ViewUserController = function (req, res) {
    FindUserByID(req.params.id).then(user => {
        if (!user)
            return res.status(400).json({message: "id not found"})
        res.json({user})
    })
}

const DeleteUserController = async function (req, res) {

    try {
        await DeleteUser(req.params.id)
        return res.json({message: 'user deleted successfully'})
    } catch (e) {
        return res.status(400).json({message: e.message})
    }

}

module.exports = {
    getAllUsersController,CreateNewUserController,ViewUserController,DeleteUserController
}

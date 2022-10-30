const {
    getAllUsersController,
    ViewUserController,
    CreateNewUserController,
    DeleteUserController
} = require("./controller");

const express = require("express");
const {checkUserLimit, checkUserIsAdmin} = require("./Middlewares");

let HRApp = express();
let AdminApp = express();


function LoadAdminRoutes(MainApp) {
    // list users
    AdminApp.get("/users", getAllUsersController);
// view one user
    AdminApp.get("/users/:id", ViewUserController);
// create new user
    AdminApp.post("/users", CreateNewUserController);
// delete user
    AdminApp.delete("/users/:id", DeleteUserController);

    MainApp.use("/admin", checkUserIsAdmin,AdminApp)

}

function LoadHrRoutes(MainApp) {
    // list users
    HRApp.get("/users", getAllUsersController);
// view one user
    HRApp.get("/users/:id", checkUserLimit, ViewUserController);


    MainApp.use("/hr", HRApp)
}

function LoadRoutes(MainApp) {

    LoadAdminRoutes(MainApp)
    LoadHrRoutes(MainApp)

}

module.exports = {LoadRoutes}

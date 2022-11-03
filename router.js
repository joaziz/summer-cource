const {
    getAllUsersController,
    ViewUserController,
    CreateNewUserController,
    DeleteUserController
} = require("./controller");

const express = require("express");
const {checkUserLimit, checkUserIsAdmin} = require("./Middlewares");
const {LoginController, SingUpController} = require("./AuthController");

let HRApp = express();
let AdminApp = express();


function LoadAdminRoutes(MainApp) {


    AdminApp.post("/auth/login", LoginController);
    AdminApp.post("/auth/sing-up", SingUpController);

    let authRoutes = express();

    authRoutes.use(checkUserIsAdmin);  // list users
    authRoutes.get("/users", getAllUsersController);
    authRoutes.get("/users/:id", ViewUserController);// view one user
    authRoutes.post("/users", CreateNewUserController);// create new user
    authRoutes.delete("/users/:id", DeleteUserController);// delete user

    AdminApp.use(authRoutes)
    MainApp.use("/admin", AdminApp)

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

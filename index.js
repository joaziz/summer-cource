const express = require("express");
const {LoadRoutes} = require("./router");


const MainApp = express();
const PORT = 3000
console.log("start loading Middleware")
MainApp.use(express.json());
MainApp.use(function (req, res, next) {
    console.log("new request", req.path, req.ip);
    next();
})

LoadRoutes(MainApp)

MainApp.listen(PORT)


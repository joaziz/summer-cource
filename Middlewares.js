let counts = {}


// co = {1002:1,1003:3}
//mid fun
function checkUserLimit(req, res, next) {
    let {id} = req.params
    console.log("id", id)
    console.log("counts", counts);


    if (id in counts) {
        if (counts[id] >= 3)
            return res.status(403).json({message: "can`t see this user again"});
        counts[id] = counts[id] + 1;
    } else {
        counts[id] = 1;
    }
    next();

}

function checkUserIsAdmin(req, res, next) {
    let token = req.headers["token"];

    if (token == "123123")
        return next();

    return res.status(401).json({message: "unauthorized"});

}

module.exports = {
    checkUserLimit,checkUserIsAdmin
}

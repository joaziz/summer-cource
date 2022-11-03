const {RegisterNewUser, LoginUser} = require("./AuthService");


async function LoginController(req, res) {

    let {username, password} = req.body;

    if (!username || !password)
        return res.status(400).json({message: " missing username or password"})

    try {
        let user = await LoginUser(username, password)
        return res.json({user})
    } catch (e) {
        return res.status(400).json({message: e.message})
    }


}

async function SingUpController(req, res) {
    let {username, password} = req.body;

    if (!username || !password)
        return res.status(400).json({message: " missing username or password"})

    try {
        await RegisterNewUser(username, password)
    } catch (e) {
        return res.status(400).json({message: e.message})
    }

    return res.json({d: "ddd"})

}


module.exports = {
    SingUpController, LoginController
}

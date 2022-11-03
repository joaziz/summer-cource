const {getUsers, CreateNewUser} = require("./DB");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'sjdfisudfisdyfo';

async function IsUserNameExists(username) {
    let users = await getUsers();
    let result = users.filter(u => u.username === username && u.IsAdmin === true);

    return result.length > 0
}


async function CreateNewAdmin(username, password) {
    await CreateNewUser({
        username, password, IsAdmin: true, IsActive: true
    })
}

async function RegisterNewUser(username, password) {
    // check if username already exists
    let result = await IsUserNameExists(username);
    if (result) {
        throw new Error("User Already exists")
    }

    let hash = await bcrypt.hash(password, 10);
    await CreateNewAdmin(username, hash)

}


async function GetUser(username) {
    return (await getUsers()).filter(u => u.username === username && u.IsAdmin === true)[0];
}

async function GenToken(user) {
    let {username, id} = user


    return new Promise((resolve, reject) => {
        jwt.sign({username, id}, secret, function (err, result) {
            if (err) return reject(err);
            resolve(result)
        });
    });
}

async function LoginUser(username, password) {
    // check is user exist
    let result = await IsUserNameExists(username);
    if (!result) {
        throw new Error("User is not exists")
    }

    let user = await GetUser(username)

    // validate password
    //is active
    if (!user.IsActive)
        throw new Error("User is not active")
    // create token
    console.log(user.password, password)
    let PasswordMatched = await bcrypt.compare(password, user.password)

    if (!PasswordMatched)
        throw new Error("error in username or password")
    // edit userObject

    let string = await GenToken(user)

    // return user
    return {token: string};
}

// return {isValid,user}
async function ParsToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, async function (err, decoded) {
            if (err)
                return resolve({isValid: false})
            let isValid = await IsUserNameExists(decoded.username)
            if (isValid) {
                let user = await GetUser(decoded.username)
                if (user.id !== decoded.id)
                    return resolve({isValid: false})

                return resolve({isValid, user: user})
            }
            return resolve({isValid: false})
        });
    })


}


module.exports = {
    RegisterNewUser, LoginUser, ParsToken
}

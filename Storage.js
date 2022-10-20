const {readFile, writeFile} = require("fs").promises;

function read(filnae) {
    return readFile(filnae, "utf-8")
}


function write(filname, content) {
    return writeFile(filname, content)
}

module.exports = {
    read,write
}

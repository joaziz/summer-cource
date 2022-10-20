const math = require("mathjs")


function greetings(name) {
    if (!name)
        throw new Error("missing name");

    let messages = [
        `welcome Mr ${name}`,
        `Good afternoon ${name}`,
        `Hi ${name}`,
        `Good morning ${name}`,
        `Have a nice day, Mr  ${name}`,
    ]

    let num = Random()
    while (num >= messages.length)
        num = Random()

    console.log(messages[num]);
}

function Random() {
    return Math.round(Math.random() * 10);
}

for (let i = 2; i < process.argv.length; i++)
    greetings(process.argv[i])

console.log(math.sqrt(16))

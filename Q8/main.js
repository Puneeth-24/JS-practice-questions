const user = {
    id: 1,
    username: "Puneeth",
    isAdmin: true
}

const userJson = JSON.stringify(user);

console.log("Json string:");
console.log(userJson)


const parsedUser = JSON.parse(userJson)
console.log(parsedUser)


console.log(parsedUser.username)
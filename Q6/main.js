const user = {
    username : "Puneeth Jain S",
    email : "pjs@gmail.com",
    password : 1234,
    age : 20
}

console.log(`Username: ${user.username}`)
console.log("Updating email to pjs@yahoo.com");
user.email = "pjs@yahoo.com"

console.log("adding new property called isAdmin");
user.isAdmin = true;

console.log("Updated object")
console.log(user)
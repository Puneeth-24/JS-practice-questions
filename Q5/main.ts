let students : string[]  = ["Ram","Virat","Robert","Joe","Jack"];

console.log("Added new student john")
students.push("John")

console.log("removed Robert")
students.splice(students.indexOf("Robert"),1)

console.log("Display Students name");
for(let student of students){
    console.log(student);
    
}

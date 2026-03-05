var students = ["Ram", "Virat", "Robert", "Joe", "Jack"];
console.log("Added new student john");
students.push("John");
console.log("removed Robert");
students.splice(students.indexOf("Robert"), 1);
console.log("Display Students name");
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    console.log(student);
}

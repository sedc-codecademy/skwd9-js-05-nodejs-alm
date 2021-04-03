const studentService = require('./students-service');

let student = {
    name: "Peter",
    age: 20,
    city: "Skopje",
    academy: 'Code'
}

studentService.addStudent(student);
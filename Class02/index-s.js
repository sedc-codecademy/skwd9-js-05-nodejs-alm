const studentService = require('./students-service');

let peter = {
    id: 1, 
    name: "Peter",
    age: 20,
    city: "Skopje",
    academy: 'Code'
}

let josh = {
    id: 2,
    name: "Josh",
    age: 30,
    city: "Skopje",
    academy: 'Code'
}

// studentService.addStudent(peter);

// studentService.deleteStudent(1);

studentService.editStudent(2, { age: 31 })

console.log(studentService.getStudents())
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

// console.log(studentService.getStudent(2))

// console.log(studentService.getStudents())


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What are you trying to do? ', answer => {
    switch (answer) {
        case 'get-all':
            console.log(studentService.getStudents())
            break;
        case 'get':
            getStudent();
            break;
        case 'edit':
            editStudent();
            break;
        case 'delete':
            deleteStudent();
            break;
        default:
            console.log('No such method!');
            rl.close();
            break;
    }
})

const getStudent = () => {
    rl.question('Which student are you looking for? ID: ', id => {
        console.log(
            studentService.getStudent(Number(id.trim()))
        )
        rl.close();
    })
}

const editStudent = () => {
    rl.question('Which student do you want to edit? ID: ', id => {
        console.log(studentService.getStudent(Number(id.trim())));
        rl.question('Add the new JSON object for the student ', editedStudent => {
            studentService.editStudent(Number(id.trim()), JSON.parse(editedStudent))
            rl.close();
        })
    })
}

const deleteStudent = () => {
    rl.question('Which student do you want to delete? ID: ', id => {
        studentService.deleteStudent(Number(id.trim()));
        rl.close()
    })
}
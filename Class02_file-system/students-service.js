const fs = require('fs');

const getStudents = () => {
    let data = fs.readFileSync('./students.json');
    let parsedData = JSON.parse(data);
    return parsedData.students;
}

const getStudent = (id) => {
    let students = getStudents();
    const student = students.find(s => s.id === id);
    if (!student) {
        throw new Error(`Student with ID: ${id} can't be found in the DB.`)
    }
    return student;
}

const addStudent = (student) => {
    let students = getStudents();
    const exists = students.find(s => s.id === student.id)
    if (exists) {
        throw new Error(`The student ${student.name} with ID: ${student.id} already exists in the DB.`)
    }
    students = [...students, student]
    saveStudents(students);
}

const editStudent = (id, editedStudent) => {
    let students = getStudents();
    let index = students.findIndex(s => s.id === id);
    if (!index && index !== 0) {
        throw new Error('No such student in db!')
    }
    let student = students[index];
    student = { ...student, ...editedStudent }
    students[index] = student;
    saveStudents(students);
}

const deleteStudent = (id) => {
    let students = getStudents();
    students = students.filter(s => s.id !== id);
    saveStudents(students);
}

const saveStudents = (students) => {
    let data = { students }
    let stringifiedData = JSON.stringify(data);
    fs.writeFileSync('./students.json', stringifiedData)
}

module.exports = {
    getStudents,
    getStudent,
    addStudent,
    editStudent,
    deleteStudent
}
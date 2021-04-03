const fs = require('fs');

const getStudents = () => {
    let data = fs.readFileSync('./students.json');

    let parsedData = JSON.parse(data);

    return parsedData.students;
}

const addStudent = (student) => {
    let students = getStudents();

    students = [...students, student]

    let data = {
        students
    }

    let stringifiedData = JSON.stringify(data);

    fs.writeFileSync('./students.json', stringifiedData)
}

module.exports = {
    getStudents,
    addStudent
}
module.exports = class User {
    constructor(id, email, password, fullName, age, gender, role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
        this.role = role;
    }
}
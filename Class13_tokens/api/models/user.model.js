module.exports = class User {
    constructor(id, email, password, fullName, age, gender) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
    }
}
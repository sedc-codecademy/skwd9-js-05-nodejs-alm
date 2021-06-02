const ts = require("../../common/db/text-service");
const { v4: uuidv4 } = require("uuid");
const UserType = require("../../common/models/user-type.enum");
const bcrypt = require("bcrypt");

class AuthService {
  static async login(credentials) {
    // if user exists
    const users = ts.readData("users.json");

    const user = users.find(u => u.username === credentials.username);

    if (!user) {
      throw new Error(`Invalid credentials`);
    }

    // validate password
    const validPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!validPassword) {
      throw new Error(`Invalid credentials`);
    }

    // log in the user
    return { message: "Logged in!" };
  }

  static async register(credentials) {
    // if user already exist
    const users = ts.readData("users.json");

    const exists = users.some(u => u.username === credentials.username);

    if (exists) {
      throw new Error(
        `User with username: ${credentials.username} already exists.`
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(credentials.password, salt);

    // create the user
    const user = {
      id: uuidv4(),
      username: credentials.username,
      password: hashedPassword,
      type: UserType.user,
    };

    // save the user
    users.push(user);
    ts.writeData("users.json", users);

    // return the user
    return user;
  }
}

module.exports = AuthService;

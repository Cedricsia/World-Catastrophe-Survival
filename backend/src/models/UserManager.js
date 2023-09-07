const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  getOneByEmail(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  createOne({ username, email, password }) {
    return this.database.query(
      `INSERT INTO ${this.table} (username, email, password) VALUES (?,?,?)`,
      [username, email, password]
    );
  }
}

module.exports = UserManager;

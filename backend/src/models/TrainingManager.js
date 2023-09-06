const AbstractManager = require("./AbstractManager");

class TrainingManager extends AbstractManager {
  constructor() {
    super({ table: "training" });
  }
}

module.exports = TrainingManager;

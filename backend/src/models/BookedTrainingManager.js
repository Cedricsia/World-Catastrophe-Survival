const AbstractManager = require("./AbstractManager");

class BookedTrainingManager extends AbstractManager {
  constructor() {
    super({ table: "booked_training" });
  }
}

module.exports = BookedTrainingManager;

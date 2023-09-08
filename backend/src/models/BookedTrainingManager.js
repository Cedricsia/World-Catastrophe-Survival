const AbstractManager = require("./AbstractManager");

class BookedTrainingManager extends AbstractManager {
  constructor() {
    super({ table: "booked_training" });
  }

  createOne({
    startTime,
    endTime,
    subject,
    impairment,
    trainingid,
    teacherid,
    userid,
  }) {
    return this.database.query(
      `INSERT INTO ${this.table} (start_time, end_time, subject, impairment, training_id, teacher_id, user_id) VALUES (?,?,?,?,?,?,?)`,
      [startTime, endTime, subject, impairment, trainingid, teacherid, userid]
    );
  }
}

module.exports = BookedTrainingManager;

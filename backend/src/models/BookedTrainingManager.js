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

  getAllByUser(id) {
    return this.database.query(
      `SELECT bt.id booked_id, bt.start_time, bt.end_time, bt.impairment, train.id train_id, train.title, train.description, train.category, train.difficulty, t.id teacher_id, t.profilepicture, d.name day FROM booked_training bt JOIN training train ON bt.training_id = train.id JOIN teacher t ON train.teacher_id = t.id JOIN day d ON d.id = bt.day_id WHERE bt.user_id = ?`,
      [id]
    );
  }
}

module.exports = BookedTrainingManager;

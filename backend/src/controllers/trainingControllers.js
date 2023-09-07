const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const [trainings] = await tables.training.getAll();

    res.json(trainings);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const [training] = await tables.training.getOne(req.params.id);

    if (training == null) {
      res.sendStatus(404);
    } else {
      res.json(training);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };

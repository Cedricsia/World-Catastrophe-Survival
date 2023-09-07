const tables = require("../tables");

const checkUserExist = async (req, res, next) => {
  try {
    const [user] = await tables.user.getOneByEmail(req.body.email);

    if (!user.length) throw new Error("This user doesn't exist");

    req.user = user[0];
    console.log(req.user);

    return next();
  } catch (error) {
    console.warn(error);
    res.status(404).send(error);
  }
};

module.exports = checkUserExist;

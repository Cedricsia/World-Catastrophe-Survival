const { encodeJWT } = require("../helpers/jwtHelper");
// const { createOne } = require("../models/user.model.js");

const signin = async (req, res) => {
  try {
    if (req.user.password !== req.body.password)
      throw new Error("Password doesn't match");

    delete req.user.password;

    const token = encodeJWT(req.user);

    res.cookie("auth_token", token, { httpOnly: true, secure: false });

    res.status(200).json(req.user);
  } catch (error) {
    console.warn(error);
    res.status(403).send(error);
  }
};

// const signup = async (req, res, next) => {
//   const [result] = await createOne(req.body);

//   delete req.body.password;

//   if (result.affectedRows) {
//     res.status(201).json({ id: result.insertId, ...req.body });
//   } else {
//     res.sendStatus(500);
//   }
// };

const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

module.exports = { signin, logout };

let jwt = require("jsonwebtoken");
exports.logser = (req, rep) => {
  n = req.query.email;
  p = req.query.pass;
  let tok = jwt.sign(n, "aamm");
  rep.cookie("token", tok);
  rep.redirect("/");
};

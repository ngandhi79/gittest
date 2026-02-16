let { logser } = require("./service");
exports.showlogcont = (req, rep) => {
  rep.render("adminlogin", { message: "please login" });
};

exports.showregcont = (req, rep) => {
  rep.render("register");
};
exports.logcont = (req, rep) => {
  logser(req, rep);
};

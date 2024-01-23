// exports.register = (req, res, next) => {
//   res.json({ message: "Register" });
// };

exports.register = (req, res, next) => {
  const { email, password } = req.body;

  //  logic

  res.json({ email, password });
};

exports.login = (req, res, next) => {
  res.json({ message: "Login" });
};

exports.forgetPassword = (req, res, next) => {
  res.json({ message: "Forget password" });
};

exports.verifyForgetPassword = (req, res, next) => {
  res.json({ message: "Verify forget password" });
};

exports.resetPassword = (req, res, next) => {
  res.json({ message: "Reset password" });
};

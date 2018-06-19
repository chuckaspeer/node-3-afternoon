module.exports = function (req, res, next) {
  const { session } = rez;
  if (!session.user) {
    session.user = { username: "", cart: [], total: 0 };
  }
  next();
};

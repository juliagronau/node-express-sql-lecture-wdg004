const checkIfAuthorized = (req, res, next) => {
  console.log(req.query.auth);
  if (req.query.auth === "ichdarfdas") {
    next();
  } else {
    res.status(403).send("Du darfst das nicht");
  }
};

export default checkIfAuthorized;

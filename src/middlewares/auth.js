require("dotenv").config();
var jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

//middleware for admin verify
const verifyAdmin = async (req, res, next) => {
  email = req.decoded.email;
  const query = { email: email };
  const user = await userCollection.findOne(query);
  if (user?.role !== "admin") {
    return res.status(403).send({ error: true, message: "forbidden access" });
  }
  next();
};

//middleware for seller verify
const verifySeller = async (req, res, next) => {
  email = req.decoded.email;
  const query = { email: email };
  const user = await userCollection.findOne(query);
  if (user?.role !== "seller") {
    return res.status(403).send({ error: true, message: "forbidden access" });
  }
  next();
};

module.exports = { verifyJWT, verifyAdmin, verifySeller };

const jwt = require("jsonwebtoken");

const JWT_SECRET = 'KLUCZ_123';

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Brak tokenu" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Nieprawidłowy token" });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;

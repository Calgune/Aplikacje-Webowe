const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./user");

const app = express();
app.use(express.json());

const JWT_SECRET = "KLUCZ_123";

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc2NzAxMzg5NSwiZXhwIjoxNzY3MDE3NDk1fQ.SX9Mu9VzL5FOmGk7PuW9JY2AT58J9dM48uzknktKxxE */
// REJESTRACJA
// zrobić aby nie dało się zarejestorać na tego samego maila
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ message: "Email jest już zajęty" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ id: newUser.id });
});

// LOGOWANIE
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ message: "Nieprawidłowe dane" });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Nieprawidłowe dane" });
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
});

app.listen(3003, () => {
  console.log("Users service włączono na porcie 3003");
});

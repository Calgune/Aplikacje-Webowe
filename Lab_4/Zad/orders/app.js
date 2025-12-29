const express = require("express");
const axios = require("axios");
const Order = require("./order");
const authenticateToken = require("./auth");

const app = express();
app.use(express.json());

// endpoity
app.get("/api/orders/:userId", async (req, res) => {
  const orders = await Order.findAll({
    where: { userId: req.params.userId },
  });
  res.json(orders);
});

app.post("/api/orders", authenticateToken, async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  if (!userId || !bookId || !quantity) {
    return res.status(400).json({
      message: "Brak wymaganych danych",
    });
  }

  try {
    await axios.get(`http://localhost:3001/api/books/${bookId}`);
  } catch (err) {
    return res.status(404).json({
      message: "Książka nie istnieje",
    });
  }

  const order = Order.create({
    userId,
    bookId,
    quantity,
  });

  res.status(201).json({
    id: order.id
  });
});

app.delete("/api/orders/:orderId", authenticateToken, async (req, res) => {
  const order = await Order.findByPk(req.params.orderId);
  if (!order) {
    return res.status(404).json({ message: "Nie znaleziono zamówienia" });
  }
  await order.destroy();
  res.json({ message: "Usunięto zamówienie" });
});

app.patch("/api/orders/:orderId", authenticateToken, async (req, res) => {
  const { quantity } = req.body;

  await Order.update({ quantity }, { where: { id: req.params.orderId } });
  res.json({message: "Zamówienie zaktualizowane"})
});

app.listen(3002, () => {
  console.log("orders service włączono na porcie 3002");
});

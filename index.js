const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");

// middleware
app.use(express.json());

// routes

app.use("/api/products/", productRoute);
app.listen(8000, () => {
  console.log("server is running on port 8000");
});

app.get("/", (req, res) => {
  res.send("Hello from node api");
});

mongoose
  .connect("Add mongo path")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Something went worng"));

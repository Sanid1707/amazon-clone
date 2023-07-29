import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
// we are setting up the default port to 5000, but if there is an environm

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

import express from "express";
import { pool } from "./db.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.disable("x-powered-by");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bubble Street ayakta");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/companies", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT ticker, name, price FROM companies ORDER BY ticker",
    );
    res.json(result.rows);
  } catch (err) {
    console.error("failed to list companies:", err);
    res.status(500).json({ error: "internal_error" });
  }
});

app.get("/companies/:ticker", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT ticker, name, price FROM companies WHERE ticker = $1`,
      [req.params.ticker],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "not_found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("failed to fetch company:", err);
    res.status(500).json({ error: "internal_error" });
  }
});

app.post("/companies", async (req, res) => {
  const { ticker, name, sector, logo, price, volatility } = req.body;

  if (!ticker || !name || !sector || !logo || price === undefined) {
    return res.status(400).json({
      error: "missing_fields",
      required: ["ticker", "name", "sector", "logo", "price"],
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO companies(ticker,name,sector,logo,price,volatility)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id,ticker,name,price,status,created_at`,
      [ticker, name, sector, logo, price, volatility],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("failed to create company:", err);
    res.status(500).json({ error: "internal_error" });
  }
});

app.listen(PORT, () =>
  console.log(`Server http://localhost:${PORT} adresinde calisiyor`),
);

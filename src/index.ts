import express from "express";

const PORT = 3001;
const app = express();

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("Bubble Street ayakta");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () =>
  console.log(`Server http://localhost:${PORT} adresinde calisiyor`),
);

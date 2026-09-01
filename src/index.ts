import express from "express";

const PORT = 3001;
const app = express();

console.log("KURAL YAZILIYOR");

app.get("/", (req, res) => {
  console.log("De GELDİ");
  res.send("Bubble Street ayakta");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () =>
  console.log(`Server http://localhost:${PORT} adresinde calisiyor`),
);

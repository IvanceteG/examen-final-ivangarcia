const express = require("express");
const cors = require("cors");
const eventsRouter = require("./routes/esdevenimentRoutes.js");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/events", eventsRouter);
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no trobada" });
});
 
app.listen(PORT, () => {
  console.log(`API escoltant a http://localhost:${PORT}`);
});
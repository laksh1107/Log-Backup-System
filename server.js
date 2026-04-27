const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP", time: new Date() });
});

// Get logs list
app.get("/logs", (req, res) => {
  const logDir = path.join(__dirname, "logs");

  fs.readdir(logDir, (err, files) => {
    if (err) return res.status(500).send("Error reading logs");

    res.json(files);
  });
});

// Run backup
app.post("/backup", (req, res) => {
  exec("node app.js", (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr || "Backup failed");

    res.json({
      message: "Backup completed successfully",
      output: stdout,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
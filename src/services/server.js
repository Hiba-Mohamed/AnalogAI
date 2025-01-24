const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// /generate-analogy endpoint
app.post("/generate-analogy", (req, res) => {
  const { concept } = req.body;

  if (!concept) {
    return res.status(400).json({ error: "Concept is required" });
  }

  try {
    // Example logic for generating an analogy (replace with real logic)
    const analogy = `The concept of ${concept} is like a simple machine that simplifies complex tasks.`;

    return res.status(200).json({ analogy });
  } catch (error) {
    console.error("Error generating analogy:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

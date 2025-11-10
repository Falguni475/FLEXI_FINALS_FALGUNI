// backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 5001;
const JWT_SECRET = "your_secret_key";

app.use(cors());
app.use(bodyParser.json());

// In-memory "database"
let users = [];
let votes = [];

// ---------------- ROUTES ----------------

// Register
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = users.find(u => u.email === email);
  if (existingUser) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: uuidv4(), name, email, password: hashedPassword, voted: false };
  users.push(newUser);

  const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user: { name, email, voted: false } });
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user: { name: user.name, email: user.email, voted: user.voted } });
});

// Vote
app.post("/vote", (req, res) => {
  const { userId, candidate } = req.body;
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  if (user.voted) return res.status(400).json({ message: "User has already voted" });

  votes.push({ userId, candidate, date: new Date() });
  user.voted = true;
  res.json({ message: "Vote successful!" });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

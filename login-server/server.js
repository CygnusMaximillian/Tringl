const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { z } = require("zod");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
  exposedHeaders: ["Authorization"]
}));

const JWT_SECRET = "supersecretkey"; 


mongoose
  .connect("mongodb+srv://Ygnus:k7nvyTUJjKT6x4Nn@cluster0.edtysvr.mongodb.net/user_verification")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error", err));


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema, "login_verification");


const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// ✅ SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = signupSchema.parse(req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "⚠️ User already exists. Please login." });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    return res.json({ success: true, message: "✅ User created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(400).json({ success: false, message: err.errors?.[0]?.message || err.message });
  }
});

// ✅ LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ success: false, message: "❌ Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: "1h" });
    res.setHeader("Authorization", `Bearer ${token}`);

    return res.json({ success: true, message: "✅ User verified" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(400).json({ success: false, message: err.errors?.[0]?.message || err.message });
  }
});


app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));

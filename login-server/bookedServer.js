const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose
  .connect("mongodb+srv://Ygnus:k7nvyTUJjKT6x4Nn@cluster0.edtysvr.mongodb.net/user_verification")
  .then(() => console.log("✅ MongoDB connected for booking service"))
  .catch((err) => console.log("❌ MongoDB error (booking service)", err));

const bookingSchema = new mongoose.Schema(
  {
    user: {
      username: String,
      email: { type: String, required: true },
    },
    pkg: {
      id: Number,
      title: String,
      duration: String,
      provider: String,
      tags: [String],
      inclusions: [String],
      price: String,
      isBestSeller: Boolean,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "booked_packages" }
);

const Booking = mongoose.model("Booking", bookingSchema);

app.post("/booked", async (req, res) => {
  const { user, pkg } = req.body || {};

  if (!user || !pkg) {
    return res
      .status(400)
      .json({ success: false, message: "user and pkg are required" });
  }

  try {
    const booking = new Booking({ user, pkg });
    await booking.save();
    return res.json({ success: true, message: "Package booked", booking });
  } catch (error) {
    console.error("Booking save error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to save booking" });
  }
});

app.get("/booked", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.error("Booking fetch error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch bookings" });
  }
});

app.listen(3001, () =>
  console.log("🚀 Booked server running on http://localhost:3001")
);



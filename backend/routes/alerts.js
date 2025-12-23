const router = require("express").Router();
const Alert = require("../models/Alert");
const auth = require("../middleware/auth");

// CREATE SOS ALERT
router.post("/", auth, async (req, res) => {
  try {
    const { lat, lng } = req.body;

    const alert = await Alert.create({
      user: req.user.id,
      lat,
      lng,
    });

    res.json({ success: true, alert });
  } catch (e) {
    res.status(400).json({ success: false, error: e.message });
  }
});

// GET ALL ALERTS (Rakshak/Admin)
router.get("/", auth, async (req, res) => {
  const alerts = await Alert.find()
    .populate("user", "name email role")
    .sort({ createdAt: -1 });

  res.json({ success: true, alerts });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Sponsor = require("../models/Sponsor");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "jatayu-kernel/Sponsor",
    format: async (req, file) => "png",
    public_id: (req, file) => uuidv4(),
  },
});

const upload = multer({ storage: storage });

// Upload Sponsor
router.post("/upload", upload.single("myfile"), async (req, res) => {
  try {
    const newSponsor = new Sponsor({
      Sponsor_Url: req.file.path,
      public_id: req.file.filename,
    });
    await newSponsor.save();
    res.send("File uploaded successfully!");
  } catch (error) {
    console.error("Error uploading to Cloudinary or saving to MongoDB:", error);
    res.status(500).send("Error uploading file");
  }
});

// Delete Sponsor
router.delete("/upload/:id", async (req, res) => {
  try {
    const sponsor = await Sponsor.findById(req.params.id);
    if (!sponsor) return res.status(404).send("Sponsor not found");

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(sponsor.public_id);

    // Delete from MongoDB
    await Sponsor.findByIdAndDelete(req.params.id);

    res.send("Sponsor deleted successfully!");
  } catch (error) {
    console.error("Error deleting from Cloudinary or MongoDB:", error);
    res.status(500).send("Error deleting file");
  }
});

// Display Sponsors
router.get("/sponsors", async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    res.json(sponsors);
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    res.status(500).send("Error fetching sponsors");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Banner = require("../models/Banner");  // Make sure the model name is correct

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "jatayu-kernel/Banner",
    format: async (req, file) => "png",
    public_id: (req, file) => uuidv4(),
  },
});

const upload = multer({ storage: storage });

// Upload Banner
router.post("/upload", upload.single("myfile"), async (req, res) => {
  console.log("check");
  try {
    const newBanner = new Banner({
      Banner_Url: req.file.path,
      public_id: req.file.filename,
    });
    await newBanner.save();
    res.send("File uploaded successfully!");
  } catch (error) {
    console.error("Error uploading to Cloudinary or saving to MongoDB:", error);
    res.status(500).send("Error uploading file");
  }
});

// Delete Banner
router.delete("/upload/:id", async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);  // Corrected model name to 'Banner'
    if (!banner) return res.status(404).send("Banner not found");

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(banner.public_id);

    // Delete from MongoDB
    await Banner.findByIdAndDelete(req.params.id);

    res.send("Banner deleted successfully!");
  } catch (error) {
    console.error("Error deleting from Cloudinary or MongoDB:", error);
    res.status(500).send("Error deleting file");
  }
});

// Display Banners
router.get("/banners", async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (error) {
    console.error("Error fetching banners:", error);
    res.status(500).send("Error fetching banners");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Image = require("../models/Image");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "jatayu-kernel",
    format: async (req, file) => "png",
    public_id: (req, file) => uuidv4(),
  },
});

const upload = multer({ storage: storage });

// Upload Image
router.post("/upload", upload.single("myfile"), async (req, res) => {
  try {
    const newImage = new Image({
      Image_Url: req.file.path,
      public_id: req.file.filename,
    });
    await newImage.save();
    res.send("File uploaded successfully!");
  } catch (error) {
    console.error("Error uploading to Cloudinary or saving to MongoDB:", error);
    res.status(500).send("Error uploading file");
  }
});

// Delete Image
router.delete("/upload/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).send("Image not found");

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(image.public_id);

    // Delete from MongoDB
    await Image.findByIdAndDelete(req.params.id);

    res.send("Image deleted successfully!");
  } catch (error) {
    console.error("Error deleting from Cloudinary or MongoDB:", error);
    res.status(500).send("Error deleting file");
  }
});

// Display Images
router.get("/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

module.exports = router;

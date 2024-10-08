const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
require("dotenv").config();
require("./db"); // Ensure this path is correct
const imageRoutes = require("./routes/images"); // Ensure this path is correct
const bannerRoutes = require("./routes/banner"); 
const sponsorRoutes = require("./routes/sponsor"); 

const app = express();

// Use cors middleware
app.use(cors());

app.use(express.json()); // Make sure to parse JSON

app.use("/api/gallery", imageRoutes); // Ensure route is mounted correctly
app.use("/api/poster", bannerRoutes);
app.use("/api/sponsor", sponsorRoutes); 

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on", port);
});

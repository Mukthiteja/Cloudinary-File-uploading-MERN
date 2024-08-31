# Cloudinary File Uploading MERN

This project demonstrates how to set up a file uploading feature in a MERN (MongoDB, Express, React, Node.js) stack application using Cloudinary for media storage. The application allows users to upload images, view a list of uploaded images, and delete images.

## Features

- **File Uploading**: Upload images to Cloudinary.
- **Image Management**: View and delete images.
- **React Frontend**: User interface for managing images.
- **Express Backend**: API endpoints for uploading, retrieving, and deleting images.
- **MongoDB**: Store metadata of uploaded images.

## Project Structure

. ├── client/ # React frontend │ ├── src/ │ │ ├── components/ # React components (ImageList, ImageCard, ImageUploader) │ │ ├── App.jsx # Main App component │ │ ├── index.jsx # Entry point for React │ ├── package.json # React dependencies and scripts ├── server/ # Express backend │ ├── models/ # Mongoose models │ │ └── Image.js # Image model │ ├── routes/ # API routes │ │ └── images.js # Image routes (upload, delete, fetch) │ ├── .env # Environment variables │ ├── server.js # Entry point for Express │ ├── package.json # Backend dependencies and scripts └── README.md # Project documentation


## Getting Started

### Prerequisites

- Node.js and npm installed
- Cloudinary account
- MongoDB instance (local or MongoDB Atlas)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/cloudinary-file-uploading-mern.git
   cd cloudinary-file-uploading-mern

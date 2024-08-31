import React from "react";
import axios from "axios";

function ImageCard({ image, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/upload/${image._id}`);
      onDeleteSuccess(); // Refetch images after successful deletion
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div>
      <img src={image.Image_Url} alt="Uploaded" style={{ width: "200px" }} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ImageCard;

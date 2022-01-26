import React from "react";

import "../styles/body.css";
import ImageCard from "./ImageCard";

function Body({ items, handleLikes, likes }) {
  return (
    <ul className="body">
      {items.map((item) => (
        <ImageCard
          key={item.title}
          image={item}
          handleLikes={handleLikes}
          likes={likes}
        />
      ))}
    </ul>
  );
}

export default Body;

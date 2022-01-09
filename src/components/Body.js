import React from "react";
import "../styles/body.css";

function Body({ items, like, likeItemId, handleLikes }) {
  return (
    <ul className="home">
      {items.map((item, idx) => (
        <li key={idx}>
          <div className="card">
            <img className="card-img" src={item.hdurl} alt="" />
            <h2>{item.title}</h2>
            <p>Date of capture: {item.date}</p>
            {like && likeItemId === item.title ? (
              <button onClick={() => handleLikes(item.title)}>
                <i className="fa fa-thumbs-down"></i>
              </button>
            ) : (
              <button onClick={() => handleLikes(item.title)}>
                <i class="fa fa-thumbs-up"></i>
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Body;

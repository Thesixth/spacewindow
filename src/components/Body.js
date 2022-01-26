import React from "react";
import "../styles/body.css";

function Body({ items, handleLikes, likes }) {
  return (
    <ul className="body">
      {items.map((item) => (
        <li key={item.title}>
          <div className="card">
            <img className="card-img" src={item.hdurl} alt="" />
            <h2>{item.title}</h2>
            <p>Date of capture: {item.date}</p>
            <button
              id={item.title}
              className="iconButton"
              onClick={() => handleLikes(item.title)}
            >
              {likes.includes(item.title) ? (
                <>
                  <i className="like fa fa-heart" />
                  <h3>You like this</h3>
                </>
              ) : (
                <i className="fa fa-heart" />
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Body;

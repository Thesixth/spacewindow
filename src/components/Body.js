import React from "react";
import "../styles/body.css";

function Body({ items, handleLikes, likes }) {
  return (
    <ul className="body">
      {items.map((item, idx) => (
        <li key={idx}>
          <div className="card">
            <img className="card-img" src={item.hdurl} alt="" />
            <h2>{item.title}</h2>
            <p>Date of capture: {item.date}</p>
            <button
              id={idx}
              className="iconButton"
              onClick={() => handleLikes(idx)}
            >
              {likes.includes(idx) ? (
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

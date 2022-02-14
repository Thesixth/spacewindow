function ImageCard({ image, handleLikes, likes }) {
  return (
    <li>
      <div className="card">
        <img className="card-img" src={image.hdurl} alt="" />
        <h2>{image.title}</h2>
        <p>Date of capture: {image.date}</p>
        <button
          id={image.title}
          className="iconButton"
          onClick={() => handleLikes(image.title)}
        >
          {likes.includes(image.title) ? (
            <>
              Unlike <i className="like fa fa-heart" />
            </>
          ) : (
            <>Like</>
          )}
        </button>
      </div>
    </li>
  );
}

export default ImageCard;
